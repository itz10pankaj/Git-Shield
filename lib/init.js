const fs = require("fs");
const path = require("path");

function initRepo() {
    try {
        const gitPath = path.resolve(process.cwd(), ".git");
        if (!fs.existsSync(gitPath)) {
            console.error("❌ This is not a Git repository.");
            process.exit(1);
        }

        console.log("⚙️  Initializing Git Shield...");

        const config = {
            ignore: ["README.md"],
            blockPatterns: [
                ".env",
                "config/*.json",
                "*.pem",
                "secrets/*.json",
                "node_modules/**",
                "*.log",
                ".DS_Store",
            ],
        };

        const configPath = path.resolve(process.cwd(), ".gitwallrc");
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log("✅ .gitwallrc created");

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
    } catch (err) {
        console.error("❌ Initialization failed:", err.message);
        process.exit(1);
    }
}

module.exports = initRepo;
