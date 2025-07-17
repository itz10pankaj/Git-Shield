
# Git Shield 🧱

Git Shield is a CLI tool that helps developers automatically **block or ignore specific files from being committed** using Git hooks (pre-commit). It's designed to enhance code hygiene and prevent unwanted files from being pushed to the repository.

## ✨ Features
   Feature |
 | --- |
 | 🔒 Prevents commits of `.env`, secrets, and other sensitive files   |
 | 🧹 Keeps your commits clean and focused   |
 | 👨‍💻 Educates devs on best practices   |
 | 🧩 Integrates directly into your local Git hooks   |

## 📦 Installation

```bash
# Install Package
npm install -g git-shield
🚀 Usage
1. Initialize in your project

# Make sure your project is already a Git repository:
git init # If not already initialized
# Then initialize Git Shield:
git-shield init

```
>💡 This will create the following file if it doesn’t exist:
## 📁 File
```
# .git/hooks/pre-commit
# .gitwallrc
```
## ➡️ Configuration

Edit the **.gitwallrc** file to specify which files or patterns you want to block:

```bash
{
  "blockedPatterns": [
    "src/config/*.env",
    "*.log",
    "temp/**"
  ]
}
```

You can use glob patterns to match files and directories.

## ➡️ Make a Commit

When you try to commit, Git Shield will check the staged files and block the commit if any blocked files are included.

```bash
git add .
git commit -m "Your commit message"
```
If any blocked files are detected, the commit will be rejected with a message listing the blocked files.
## Example Output:
```bash
❌ Commit blocked!
Blocked file(s):
 - .env
 - node_modules/some-lib/index.js

Fix the issue or update your config to allow these files
```
## 🛠 Development

Clone this repo and link it locally if you're working on Git Shield itself:

```bash
git clone https://github.com/itz10pankaj/git-shield.git
cd git-shield
npm install
npm link
```
Now git-shield command will be available globally.

📄 License

MIT © Pankaj


'ENV FILE IN FOLDERS NOT RECOGINIZED'