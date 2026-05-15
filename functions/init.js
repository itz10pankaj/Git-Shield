const fs = require("fs");
const path = require("path");
const defaultConfig = require("../utils/gitwallrc.default.js");
function initRepo() {
    try {
        const gitPath = path.resolve(process.cwd(), ".git");
        if (!fs.existsSync(gitPath)) {
            console.error("❌ This is not a Git repository.");
            process.exit(1);
        }

        console.log("⚙️  Initializing Git Shield...");
        console.log("📂 Creating .gitwallrc configuration file...");
        const configPath = path.resolve(process.cwd(), ".gitwallrc");
        fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
        console.log("✅ .gitwallrc created");
        console.log("🔧 Setting up Git hooks...");
        const hooksDir = path.resolve(process.cwd(), ".git/hooks");

        if (!fs.existsSync(hooksDir)) {
            fs.mkdirSync(hooksDir, { recursive: true });
        }

        // Pre-commit hook
        const preCommitPath = path.join(hooksDir, "pre-commit");
        const preCommitScript = `#!/bin/sh\nnpx git-shield scan\n`;
        if (fs.existsSync(preCommitPath)) {
            console.warn("⚠️  A pre-commit hook already exists. Overwriting...");
        }
        fs.writeFileSync(preCommitPath, preCommitScript);
        fs.chmodSync(preCommitPath, 0o755);

        // Commit-msg hook
        const commitMsgPath = path.join(hooksDir, "commit-msg");
        const commitMsgScript = `#!/bin/sh\nnpx git-shield check-commit "$1"\n`;
        if (fs.existsSync(commitMsgPath)) {
            console.warn("⚠️  A commit-msg hook already exists. Overwriting...");
        }
        fs.writeFileSync(commitMsgPath, commitMsgScript);
        fs.chmodSync(commitMsgPath, 0o755);

        console.log("✅ Git hooks installed (pre-commit, commit-msg)");
        console.log("🚀 Git Shield initialized successfully!");
        console.log("🔗 You can customize the configuration in .gitwallrc");
        console.log("🔍 Run 'npx git-shield scan' to check your repository or it will be checked automatically on commit.");
    } catch (err) {
        console.error("❌ Initialization failed:", err.message);
        process.exit(1);
    }
}

module.exports = initRepo;
