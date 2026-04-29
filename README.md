# Data Visualization & Analytics Portfolio

A modern, responsive portfolio designed for Data Visualization and Analytics professionals. This project is built with React and Vite, featuring a dark theme inspired by GitHub's profile and repository layout.

## Features

- **GitHub-style UI**: Professional dark mode design with familiar repository cards and a contribution graph.
- **Project Filtering**: Easily filter projects by skills or tools (e.g., Tableau, Python, Excel).
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices.
- **Customizable Data**: All profile info, skills, and projects are centralized in a single `data.js` file for easy updates.
- **Detailed Modals**: Click on any project card to view an expanded description, larger image, tags, and links.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Modules approach)
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages.

## Setup Instructions

1. **Clone the repository** (if applicable) or download the source code.
2. **Navigate to the project directory**:
   ```bash
   cd dva-portfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:5173`.

## Customization

To edit your profile, skills, and projects, open `src/data.js` and modify the exported objects:

- `profileInfo`: Your name, bio, location, and avatar.
- `contactInfo`: Your email, phone, and links to your resume/socials.
- `skills`: An array of strings representing your skills.
- `projects`: An array of objects detailing your portfolio projects.

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. The build settings will be automatically detected (`Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
5. Click "Deploy".

### Deploy to Netlify

1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://netlify.com/) and click "Add new site" -> "Import an existing project".
3. Connect your GitHub account and choose the repository.
4. Set the Build Command to `npm run build` and Publish directory to `dist`.
5. Click "Deploy site".
