const fs = require("fs");
const path = require("path");

function checkCommit(commitMsgFile) {
    try {
        const configPath = path.resolve(process.cwd(), ".gitwallrc");
        if (!fs.existsSync(configPath)) {
            return; // No config, nothing to check
        }
        
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        const commitPrefix = config.commitPrefix;

        if (!commitPrefix || commitPrefix.trim() === "") {
            return; // No prefix configured
        }

        const msgPath = path.resolve(process.cwd(), commitMsgFile);
        if (!fs.existsSync(msgPath)) {
            console.error(`❌ Commit message file not found: ${commitMsgFile}`);
            process.exit(1);
        }

        const commitMessage = fs.readFileSync(msgPath, "utf-8").trim();

        if (!commitMessage.startsWith(commitPrefix)) {
            console.error(`\n❌ Commit message validation failed!`);
            console.error(`Commit message must start with "${commitPrefix}"`);
            console.error(`Your message: "${commitMessage.split('\\n')[0]}"\n`);
            process.exit(1);
        }
        
    } catch (err) {
        console.error("❌ Failed to validate commit message:", err.message);
        process.exit(1);
    }
}

module.exports = checkCommit;
