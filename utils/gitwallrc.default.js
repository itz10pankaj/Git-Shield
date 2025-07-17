module.exports = {
    ignore: ["README.md", "LICENSE.md", "CHANGELOG.md", "CONTRIBUTING.md"],

    blockPatterns: [
        // ✅ ENV & Secret Files
        "**/*.env",               // Any .env file, anywhere
        "**/*.env.*",             // .env.production, .env.local, etc.
        ".env",                   // Single .env file in root
        "**/.env",                // Any .env file, anywhere
        "**/.env.*",              // .env.production, .env.local, etc.
        "**/secrets.*",           // secrets.js/json/ts/yml/yaml
        "**/secret.*",            // secret.js/json/ts/yml/yaml
        "**/.secrets/**",         // secrets directory
        "**/vault.*",             // vault files
        "**/*.secret",            // .secret files
        "**/*.secrets",           // .secrets files

        // ✅ Authentication & API Keys
        "**/*api*key*",           // API key files
        "**/*auth*",              // Auth files
        "**/*token*",             // Token files
        "**/*credential*",        // Credential files
        "**/*password*",          // Password files
        "**/*.creds",             // Credential files
        "**/firebase-adminsdk-*.json", // Firebase service account keys
        "**/*service-account*.json",    // Service account files
        "**/gcp-*.json",          // Google Cloud service keys
        "**/aws-*.json",          // AWS credential files
        "**/.aws/**",             // AWS config directory
        "**/.gcp/**",             // GCP config directory
        "**/.azure/**",           // Azure config directory

        // ✅ Certificates & Cryptographic Files
        "**/*.pem",               // Private/public key files
        "**/*.key",               // Private keys
        "**/*.crt",               // Certificates
        "**/*.cer",               // Certificates
        "**/*.p12",               // PKCS#12 files
        "**/*.pfx",               // PKCS#12 files
        "**/*.jks",               // Java keystore
        "**/*.keystore",          // Keystore files
        "**/*.truststore",        // Truststore files
        "**/id_rsa*",             // SSH private keys
        "**/id_dsa*",             // SSH private keys
        "**/id_ecdsa*",           // SSH private keys
        "**/id_ed25519*",         // SSH private keys
        "**/.ssh/**",             // SSH directory
        "**/.cert/**",            // Certificate directory
        "**/.certs/**",           // Certificates directory
        "**/ssl/**",              // SSL directory
        "**/tls/**",              // TLS directory
        "**/*.gpg",               // GPG files
        "**/*.asc",               // ASCII armored files

        // ✅ Database Files
        "**/*.db",                // Generic database files
        "**/*.sqlite",            // SQLite databases
        "**/*.sqlite3",           // SQLite databases
        "**/*.db3",               // SQLite databases
        "**/*.mdb",               // Microsoft Access databases
        "**/*.accdb",             // Microsoft Access databases
        "**/*.dbf",               // dBase files
        "**/*.frm",               // MySQL table format files
        "**/*.myd",               // MySQL data files
        "**/*.myi",               // MySQL index files
        "**/*.ibd",               // InnoDB data files
        "**/dump.sql",            // SQL dumps
        "**/*.dump",              // Database dumps
        "**/*.backup",            // Database backups
        "**/*.bak",               // Backup files

        // ✅ Configuration Files (Enhanced)
        "**/config.*",            // config.js/json/ts/yml/yaml
        "**/config/**",           // Config directories
        "**/configuration.*",     // Configuration files
        "**/settings.*",          // Settings files
        "**/options.*",           // Options files
        "**/preferences.*",       // Preferences files
        "**/.config/**",          // Hidden config directories
        "**/local.json",          // Local configuration
        "**/local.js",            // Local configuration
        "**/local.ts",            // Local configuration
        "**/development.*",       // Development configs
        "**/staging.*",           // Staging configs
        "**/production.*",        // Production configs
        "**/test.*",              // Test configs (be careful with test files)
        "**/*.local.*",           // Local files
        "**/*.dev.*",             // Development files
        "**/*.prod.*",            // Production files
        "**/*.staging.*",         // Staging files

        // ✅ Build & Dependency Folders (Enhanced)
        "node_modules/**",        // Node.js dependencies
        "dist/**",                // Distribution files
        "build/**",               // Build output
        "out/**",                 // Output directory
        "target/**",              // Maven/Gradle target
        "obj/**",                 // Object files
        "coverage/**",            // Test coverage
        ".nyc_output/**",         // NYC coverage
        "htmlcov/**",             // Python coverage
        ".pytest_cache/**",       // Pytest cache
        ".next/**",               // Next.js
        ".nuxt/**",               // Nuxt.js
        ".turbo/**",              // Turbo
        ".cache/**",              // Cache directories
        ".parcel-cache/**",       // Parcel cache
        ".swc/**",                // SWC cache
        ".babel-cache/**",        // Babel cache
        ".eslintcache",           // ESLint cache
        ".stylelintcache",        // Stylelint cache
        "vendor/**",              // Vendor dependencies
        "lib/**",                 // Library files (be careful)
        "libs/**",                // Library files (be careful)
        "packages/**/dist/**",    // Monorepo dist folders
        "packages/**/build/**",   // Monorepo build folders

        // ✅ Package Manager Files
        "**/*.lock",              // Lock files
        "**/yarn.lock",           // Yarn lock
        "**/pnpm-lock.yaml",      // PNPM lock
        "**/composer.lock",       // Composer lock
        "**/Gemfile.lock",        // Ruby Gemfile lock
        "**/poetry.lock",         // Poetry lock
        "**/Pipfile.lock",        // Pipfile lock
        "**/go.sum",              // Go modules
        "**/Cargo.lock",          // Rust Cargo lock
        "**/mix.lock",            // Elixir mix lock

        // ✅ Logs & Debug Files (Enhanced)
        "**/*.log",               // Log files
        "**/*.log.*",             // Rotated log files
        "**/logs/**",             // Log directories
        "**/*.pid",               // Process ID files
        "**/*.out",               // Output files
        "**/*.err",               // Error files
        "**/*.tmp",               // Temporary files
        "**/*.temp",              // Temporary files
        "**/*.swp",               // Vim swap files
        "**/*.swo",               // Vim swap files
        "**/*~",                  // Backup files
        "**/*.orig",              // Original files
        "**/*.rej",               // Rejected patches
        "**/*.diff",              // Diff files
        "**/*.patch",             // Patch files
        "**/*.stackdump",         // Stack dumps
        "**/*.dmp",               // Dump files
        "**/*.crash",             // Crash files
        "**/*.core",              // Core dumps
        "**/debug.log",           // Debug logs
        "**/error.log",           // Error logs
        "**/access.log",          // Access logs
        "**/application.log",     // Application logs

        // ✅ Operating System Files
        ".DS_Store",              // macOS
        "**/.DS_Store",           // macOS (recursive)
        "Thumbs.db",              // Windows
        "**/Thumbs.db",           // Windows (recursive)
        "desktop.ini",            // Windows
        "**/desktop.ini",         // Windows (recursive)
        "*.lnk",                  // Windows shortcuts
        ".Spotlight-V100",        // macOS
        ".Trashes",               // macOS
        ".fseventsd",             // macOS
        ".VolumeIcon.icns",       // macOS
        ".com.apple.timemachine.donotpresent", // macOS
        "Network Trash Folder",   // macOS
        "Temporary Items",        // macOS
        ".apdisk",                // macOS
        "hiberfil.sys",           // Windows
        "pagefile.sys",           // Windows
        "swapfile.sys",           // Windows
        "System Volume Information", // Windows

        // ✅ Editor & IDE Files (Enhanced)
        ".vscode/**",             // VS Code
        ".idea/**",               // IntelliJ/WebStorm
        "*.iml",                  // IntelliJ module files
        "*.ipr",                  // IntelliJ project files
        "*.iws",                  // IntelliJ workspace files
        ".project",               // Eclipse
        ".classpath",             // Eclipse
        ".settings/**",           // Eclipse
        ".metadata/**",           // Eclipse
        ".recommenders/**",       // Eclipse
        "*.sublime-project",      // Sublime Text
        "*.sublime-workspace",    // Sublime Text
        ".atom/**",               // Atom
        ".brackets.json",         // Brackets
        ".tern-project",          // Tern

        // ✅ Version Control
        ".git/**",                // Git
        ".svn/**",                // Subversion
        ".hg/**",                 // Mercurial
        ".bzr/**",                // Bazaar
        "CVS/**",                 // CVS
        ".cvs/**",                // CVS

        // ✅ Compressed Files & Archives
        "**/*.zip",               // ZIP archives
        "**/*.rar",               // RAR archives
        "**/*.7z",                // 7-Zip archives
        "**/*.tar",               // TAR archives
        "**/*.tar.gz",            // Gzipped TAR
        "**/*.tgz",               // Gzipped TAR
        "**/*.tar.bz2",           // Bzip2 TAR
        "**/*.tbz2",              // Bzip2 TAR
        "**/*.tar.xz",            // XZ TAR
        "**/*.txz",               // XZ TAR
        "**/*.gz",                // Gzip files
        "**/*.bz2",               // Bzip2 files
        "**/*.xz",                // XZ files
        "**/*.Z",                 // Compress files
        "**/*.lz",                // Lzip files
        "**/*.lzma",              // LZMA files
        "**/*.cab",               // Cabinet files
        "**/*.iso",               // ISO images
        "**/*.dmg",               // macOS disk images
        "**/*.pkg",               // macOS packages
        "**/*.deb",               // Debian packages
        "**/*.rpm",               // RPM packages
        "**/*.msi",               // Windows installers
        "**/*.exe",               // Windows executables
        "**/*.app",               // macOS applications

        // ✅ Media Files (Large/Binary)
        "**/*.mov",               // Video files
        "**/*.mp4",
        "**/*.avi",
        "**/*.mkv",
        "**/*.webm",
        "**/*.flv",
        "**/*.wmv",
        "**/*.mp3",               // Audio files
        "**/*.wav",
        "**/*.flac",
        "**/*.aac",
        "**/*.ogg",
        "**/*.wma",
        "**/*.psd",               // Photoshop files
        "**/*.ai",                // Adobe Illustrator
        "**/*.sketch",            // Sketch files
        "**/*.fig",               // Figma files (if exported)
        "**/*.xcf",               // GIMP files

        // ✅ Language-Specific Files
        // Python
        "**/__pycache__/**",      // Python cache
        "**/*.pyc",               // Python bytecode
        "**/*.pyo",               // Python optimized
        "**/*.pyd",               // Python DLL
        "**/.pytest_cache/**",    // Pytest cache
        "**/pip-log.txt",         // Pip logs
        "**/pip-delete-this-directory.txt", // Pip
        "**/.tox/**",             // Tox
        "**/.coverage",           // Coverage
        "**/.nox/**",             // Nox
        "**/htmlcov/**",          // Coverage HTML
        "**/.cache/**",           // Cache
        "**/nosetests.xml",       // Nose tests
        "**/coverage.xml",        // Coverage XML
        "**/*.cover",             // Coverage
        "**/*.py,cover",          // Coverage
        "**/.hypothesis/**",      // Hypothesis
        "**/.pytest_cache/**",    // Pytest

        // Java
        "**/*.class",             // Java bytecode
        "**/*.jar",               // Java archives
        "**/*.war",               // Web archives
        "**/*.ear",               // Enterprise archives
        "**/target/**",           // Maven
        "**/.gradle/**",          // Gradle
        "**/build/**",            // Gradle/Maven
        "**/.m2/**",              // Maven local repo
        "**/bin/**",              // Binary output
        "**/*.hprof",             // Heap dumps

        // .NET
        "**/bin/**",              // Binary output
        "**/obj/**",              // Object files
        "**/*.user",              // User-specific files
        "**/*.suo",               // Solution user options
        "**/*.userosscache",      // User cache
        "**/*.sln.docstates",     // Solution states
        "**/packages/**",         // NuGet packages
        "**/.vs/**",              // Visual Studio
        "**/*.vspscc",            // Visual Studio
        "**/*.vssscc",            // Visual Studio

        // Ruby
        "**/.bundle/**",          // Bundle
        "**/vendor/bundle/**",    // Bundler
        "**/.sass-cache/**",      // Sass cache
        "**/*.gem",               // Ruby gems
        "**/.rbenv-version",      // rbenv
        "**/.ruby-version",       // Ruby version
        "**/.ruby-gemset",        // Gemset

        // PHP
        "**/vendor/**",           // Composer
        "**/*.phar",              // PHP archives
        "**/composer.phar",       // Composer phar

        // Go
        "**/vendor/**",           // Go vendor
        "**/*.exe",               // Go binaries
        "**/*.test",              // Go test binaries
        "**/*.prof",              // Go profiling

        // Rust
        "**/target/**",           // Cargo target
        "**/*.rlib",              // Rust libraries
        "**/*.rmeta",             // Rust metadata

        // ✅ Cloud & Deployment Files
        "**/.terraform/**",       // Terraform
        "**/*.tfstate",           // Terraform state
        "**/*.tfstate.backup",    // Terraform state backup
        "**/.terragrunt-cache/**", // Terragrunt
        "**/terraform.tfvars",    // Terraform variables
        "**/*.tfvars",            // Terraform variables
        "**/.serverless/**",      // Serverless
        "**/.serverless_nextjs/**", // Serverless Next.js
        "**/.vercel/**",          // Vercel
        "**/.netlify/**",         // Netlify
        "**/amplify/**",          // AWS Amplify
        "**/.amplify/**",         // AWS Amplify
        "**/cdk.out/**",          // AWS CDK output
        "**/.cdk/**",             // AWS CDK
        "**/pulumi/**",           // Pulumi
        "**/.pulumi/**",          // Pulumi
        "**/.docker/**",          // Docker
        "**/docker-compose.override.yml", // Docker Compose override
        "**/.vagrant/**",         // Vagrant
        "**/Vagrantfile.local",   // Vagrant local
        "**/.kitchen/**",         // Test Kitchen
        "**/.molecule/**",        // Molecule

        // ✅ Testing & CI/CD Artifacts
        "**/test-results/**",     // Test results
        "**/test-output/**",      // Test output
        "**/allure-results/**",   // Allure results
        "**/allure-report/**",    // Allure reports
        "**/cypress/videos/**",   // Cypress videos
        "**/cypress/screenshots/**", // Cypress screenshots
        "**/junit.xml",           // JUnit results
        "**/coverage/**",         // Coverage reports
        "**/.nyc_output/**",      // NYC output
        "**/lcov.info",           // LCOV info
        "**/clover.xml",          // Clover coverage
        "**/cobertura.xml",       // Cobertura coverage
        "**/jacoco.xml",          // JaCoCo coverage

        // ✅ Documentation Generation
        "**/docs/_build/**",      // Sphinx build
        "**/docs/build/**",       // Docs build
        "**/site/**",             // MkDocs site
        "**/.docusaurus/**",      // Docusaurus
        "**/typedoc/**",          // TypeDoc
        "**/jsdoc/**",            // JSDoc
        "**/godoc/**",            // GoDoc

        // ✅ Temporary & System Files
        "**/tmp/**",              // Temporary directories
        "**/temp/**",             // Temporary directories
        "**/.tmp/**",             // Hidden temp directories
        "**/.temp/**",            // Hidden temp directories
        "**/cache/**",            // Cache directories
        "**/.cache/**",           // Hidden cache directories
        "**/sessions/**",         // Session files
        "**/uploads/**",          // Upload directories (be careful)
        "**/user-uploads/**",     // User uploads (be careful)
        "**/public/uploads/**",   // Public uploads (be careful)

        // ✅ Backup Files
        "**/*.backup",            // Backup files
        "**/*.bak",               // Backup files
        "**/*.old",               // Old files
        "**/*.save",              // Save files
        "**/*~",                  // Tilde backups
        "**/*.orig",              // Original files
        "**/#*#",                 // Emacs backup files
        "**/.#*",                 // Emacs lock files

        // ✅ Miscellaneous
        "**/*.pid",               // Process ID files
        "**/*.seed",              // Seed files
        "**/*.coverage",          // Coverage files
        "**/*.lcov",              // LCOV files
        "**/Thumbs.db:encryptable", // Windows
        "**/ehthumbs.db",         // Windows
        "**/ehthumbs_vista.db",   // Windows
        "**/.AppleDouble",        // macOS
        "**/.LSOverride",         // macOS
        "**/__MACOSX/**",         // macOS archive artifacts
        "**/Icon\r",              // macOS custom icons
        "**/._*",                 // macOS resource forks
        "**/.DocumentRevisions-V100", // macOS
        "**/.fseventsd",          // macOS
        "**/.Spotlight-V100",     // macOS
        "**/.TemporaryItems",     // macOS
        "**/.Trashes",            // macOS
        "**/.VolumeIcon.icns",    // macOS
        "**/.com.apple.timemachine.donotpresent", // macOS
        "**/.AppleDesktop",       // macOS
        "**/.AppleDB",            // macOS
        "**/.AppleDesktop",       // macOS
        "**/Network Trash Folder", // macOS
        "**/Temporary Items",     // macOS
        "**/.apdisk",             // macOS
    ],
};