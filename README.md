
# Git Shield 🧱

Git Shield is a CLI tool that helps developers automatically **block or ignore specific files from being committed** using Git hooks (pre-commit). It's designed to enhance code hygiene and prevent unwanted files from being pushed to the repository.

## ✨ Features
   Feature |
 | --- |
 | 🔒 Prevents commits of `.env`, secrets, and other sensitive files   |
 | 🧹 Keeps your commits clean and focused   |
 | 👨‍💻 Educates devs on best practices   |
 | 🧩 Integrates directly into your local Git hooks   |
 | 👌Quick overview of your Git repository's activity and contributors.  |

## 📦 Installation
### 🌍 Option 1: Global Installation (Recommended)
Install the package globally on your system and use it directly from anywhere:
```bash
# Install Package
npm install -g git-shield
🚀 Usage
#Initialize in your project
# Make sure your project is already a Git repository:
git init # If not already initialized
# Then initialize Git Shield:
git-shield init
```
### 📁 Option 2: Local Installation (Using npx)
If you prefer not to install it globally, you can use npx to run it directly in your project:
```bash
# Install Package
npm install git-shield
🚀 Usage
#Initialize in your project
# Make sure your project is already a Git repository:
git init # If not already initialized
# Then initialize Git Shield:
npx git-shield init
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
## 📊 Additonal Functionality: git-shield stats
The git-shield stats command gives you a quick overview of your Git repository's activity and contributors.

### 🔍 What it does:
   Feature |
  | --- |
  | Displays a list of top contributors to your repo. |
  | Shows commit activity for today, the last 7 days, and this month. |
  | Lists the most changed files with number of changes. |
  | Helps identify active developers and hotspot files. |
  | Useful for team insights and project analysis.  |
```bash
📅 Commit Activity:

Today       : 0 commits  
Last 7 days : 5 commits  
This month  : 5 commits  

👨‍💻 Top Contributors:

Using Git repo at: C:\Users\pgarg\OneDrive\Desktop\Git-guard
     5  itz10pankaj

📂 Most Changed Files:

Top  most changed files:
bin/index.js - 5 changes  
package-lock.json - 5 changes  
package.json - 5 changes  
.gitwallrc - 4 changes  
README.md - 4 changes  
utils/gitwallrc.default.js - 3 changes  
lib/init.js - 3 changes  
.gitignore - 2 changes  
CONTRIBUTING.md - 2 changes  
LICENCE.md - 1 changes
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

