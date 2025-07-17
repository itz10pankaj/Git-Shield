#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

const initRepo = require("../lib/init.js");
const scan = require("../lib/scanner");

program
  .name("git-shield")
  .description("Prevent accidental commit of sensitive files")
  .version("1.0.0");

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

program.parse();
