const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const {minimatch} = require("minimatch");

function scan() {
  const configPath = path.resolve(process.cwd(), ".gitwallrc");
  if (!fs.existsSync(configPath)) {
    console.error("❌ .gitwallrc not found");
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const { blockPatterns = [], ignore = [] } = config;

  // ✅ Get only staged files
  const output = execSync("git diff --cached --name-only", { encoding: "utf-8" });
  const stagedFiles = output.split("\n").filter(f => f.trim() !== "");

  // 🔎 Filter out ignored files
  const filtered = stagedFiles.filter(file => {
    const isIgnored = ignore.some(pattern => minimatch(file, pattern));
    const isBlocked = blockPatterns.some(pattern => minimatch(file, pattern));
    return !isIgnored && isBlocked;
  });

  if (filtered.length > 0) {
    console.log("🚫 Blocked files found:");
    filtered.forEach(f => console.log(" -", f));
    console.log("❌ Commit aborted.");
    process.exit(1);
  }

  console.log("✅ No blocked files in commit. Safe to proceed.");
}
module.exports = scan;
