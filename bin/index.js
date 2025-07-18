#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

const initRepo = require("../functions/init.js");
const scan = require("../functions/scanner.js");
const stats = require("../functions/stats.js");
program
  .name("git-shield")
  .description("Prevent accidental commit of sensitive files")
  .version("1.1.0");

program
  .command("scan")
  .description("Scan the project for sensitive files")
  .action(() => {
    console.log("🔍 Scanning your repo...");
    scan();
  });

program
  .command("init")
  .description("Setup Git Shield in this repo")
  .action(() => {
    initRepo();
  });
program
  .command("stats")
  .description("View commit & contribution statistics")
  .action(() => {
    stats();
  });
program.parse();
