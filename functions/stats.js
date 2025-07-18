// lib/stats.js

const { execSync } = require("child_process");
const chalk = require("chalk");
const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");

function getTopContributors() {
    const cwd = process.cwd();
    console.log(chalk.green.bold("\n👨‍💻 Top Contributors:\n"));
    console.log("Using Git repo at:", cwd);

    const gitDir = path.join(cwd, ".git");
    if (!fs.existsSync(gitDir)) {
        console.log("❌ Not a valid Git repository. No .git directory found.");
        return;
    }

    try {
        const result = execSync("git shortlog -s -n --all --no-merges", {
            encoding: "utf-8",
            cwd,
            shell: true
        });

        if (result && result.trim()) {
            console.log(result);
        } else {
            console.log("ℹ️ No contributors found. Try making some commits first.");
        }
    } catch (err) {
        console.error("❌ Error running git command:", err.message);
    }
}


function getMostChangedFiles() {
    try {
        console.log(chalk.blue.bold("\n📂 Most Changed Files:\n"));
        const output = execSync("git log --name-only --pretty=format:", {
            encoding: "utf8",
        });
        const files = output
            .split("\n")
            .map((f) => f.trim())
            .filter((f) => f && !f.startsWith("commit"));

        const freq = {};

        for (const file of files) {
            freq[file] = (freq[file] || 0) + 1;
        }

        const sorted = Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
        console.log(chalk.yellow("Top  most changed files:"));
        sorted.forEach(([file, count]) => {
            console.log(chalk.cyan(`${file} - ${count} changes`));
        });
        return sorted;

    } catch (err) {
        console.error("❌ Failed to get changed files:", err.message);
        return [];
    }
}

function getCommitStats() {
    console.log(chalk.yellow.bold("\n📅 Commit Activity:\n"));
    const output = execSync('git log --pretty=format:"%ad" --date=short', {
        encoding: "utf-8",
    });

    const dateCount = {};
    output
        .split("\n")
        .forEach((date) => (dateCount[date] = (dateCount[date] || 0) + 1));

    const today = dayjs().format("YYYY-MM-DD");
    const thisWeek = dayjs().subtract(7, "day");
    const thisMonth = dayjs().startOf("month");

    let daily = 0,
        weekly = 0,
        monthly = 0;

    Object.entries(dateCount).forEach(([date, count]) => {
        const d = dayjs(date);
        if (date === today) daily += count;
        if (d.isAfter(thisWeek)) weekly += count;
        if (d.isAfter(thisMonth)) monthly += count;
    });

    console.log(`Today       : ${daily} commits`);
    console.log(`Last 7 days : ${weekly} commits`);
    console.log(`This month  : ${monthly} commits`);
}

function runStats() {
    getCommitStats();
    getTopContributors();
    getMostChangedFiles();
}

module.exports = runStats;
