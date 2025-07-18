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
        console.log("🔧 Setting up pre-commit hook...");
        const hookPath = path.resolve(process.cwd(), ".git/hooks/pre-commit");
        const hooksDir = path.dirname(hookPath);

        if (!fs.existsSync(hooksDir)) {
            fs.mkdirSync(hooksDir, { recursive: true });
        }

        const hookScript = `#!/bin/sh\nnpx git-shield scan\n`;

        if (fs.existsSync(hookPath)) {
            console.warn("⚠️  A pre-commit hook already exists. Overwriting...");
        }

        fs.writeFileSync(hookPath, hookScript);
        fs.chmodSync(hookPath, 0o755);

        console.log("✅ pre-commit hook installed");
        console.log("🚀 Git Shield initialized successfully!");
        console.log("🔗 You can customize the configuration in .gitwallrc");
        console.log("🔍 Run 'npx git-shield scan' to check your repository or it will be checked automatically on commit.");
    } catch (err) {
        console.error("❌ Initialization failed:", err.message);
        process.exit(1);
    }
}

module.exports = initRepo;
