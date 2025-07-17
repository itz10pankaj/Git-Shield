module.exports =  {
    ignore: ["README.md", "LICENSE.md"],

    blockPatterns: [
        // ✅ ENV & Secret Files
        "**/*.env",               // Any .env file, anywhere
        "**/*.env.*",             // .env.production, .env.local, etc.
        "**/secrets.*",           // secrets.js/json/ts

        // ✅ Credential/Key Files
        "**/*.pem",               // Private/public key files
        "**/*.key",
        "**/*.crt",
        "**/*.p12",
        "**/id_rsa*",             // SSH private keys
        "**/.cert",               // Any hidden cert directory

        // ✅ Config Files
        "**/config.*",            // config.js/json/ts/yml
        "**/config/**/*.json",    // nested config files
        "**/credentials.*",

        // ✅ Build & Dependency Folders
        "node_modules/**",
        "dist/**",
        "build/**",
        "coverage/**",
        ".next/**",
        ".turbo/**",

        // ✅ Logs & Debug Files
        "**/*.log",
        "**/*.pid",
        "**/*.gz",
        ".DS_Store",
        "Thumbs.db",

        // ✅ Editor / OS-specific files
        ".vscode/**",
        ".idea/**",
        "**/.swp",
        "**/*~",

        // ✅ Misc file types often excluded
        "**/*.sqlite",
        "**/*.db",
        "**/*.lock",             // package-lock, yarn.lock, etc.

        // ✅ Compressed/archives
        "**/*.zip",
        "**/*.tar",
        "**/*.tgz",
        "**/*.rar",
    ],
};
