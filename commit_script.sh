#!/bin/bash
git init
git branch -M main

# Commit 1
git add package.json package-lock.json .gitignore
git commit -m "chore: initial project setup with dependencies"

# Commit 2
git add vite.config.js eslint.config.js
git commit -m "build: configure Vite and ESLint"

# Commit 3
git add index.html public/
git commit -m "feat: add entry HTML and public assets"

# Commit 4
git add src/main.jsx
git commit -m "feat: initialize React root rendering"

# Commit 5
git add src/index.css
git commit -m "style: add global CSS variables and typography"

# Commit 6
git add src/App.jsx
git commit -m "feat: setup main App layout structure"

# Commit 7
git add src/data.js
git commit -m "data: add portfolio projects and profile info"

# Commit 8
git add src/components/Header*
git commit -m "feat: create GitHub-style Header component"

# Commit 9
git add src/components/Sidebar*
git commit -m "feat: add Profile Sidebar with contact links"

# Commit 10
git add src/components/RepoCard*
git commit -m "feat: create Repository Card for projects"

# Commit 11
git add src/components/RepoList*
git commit -m "feat: add project grid with category filtering"

# Commit 12
git add src/components/Modal*
git commit -m "feat: implement interactive project details modal"

# Commit 13
git add src/components/ContributionGraph*
git commit -m "feat: add animated GitHub contribution graph"

# Commit 14
git add .
git commit -m "docs: finalize README and assets"

git remote add origin https://github.com/Lakshyalamba/Lakshyalamba.github.io.git
git push -u origin main
