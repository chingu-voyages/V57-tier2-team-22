# PR Tracker

<img width="2147" height="1040" alt="image" src="https://github.com/user-attachments/assets/684c1289-cef0-4e33-8dee-05c54eacc0dc" />

## Deployed

[https://v57-tier2-team-22.vercel.app/](https://v57-tier2-team-22.vercel.app/)

## Overview

PR Tracker is a user friendly application that allows developers and tech users to easily view the progress of pull requests in a GitHub repository. Visitors are prompted to type the owner/repository of an existing repository and after searching, see the resulting pull requests in a neat and organized dashboard. Users are able to view key features such as title, author, date created, reviewers, and status of open and closed PRs. Users are notified if information they search is not found or attempt to visit an unknown page.

## Features

**Landing Page:** A visually appealing landing page that describes the benefits and features of PR Tracker, search input to get started, and the creators of the application.

**GitHub API:** PR tracker is able to get pull requests from a GitHub repository via GitHub API and display them clearly in an interactive dashboard.

**Interactive Dashboard:** Pull requests are organized in a dashboard that presents the id, title, author, date created, reviewers, and status of pull requests. Users are able to filter results by author and reviewers. Users may also sort the data numerically, alphabetically, and by date when clicking on a table header. Options above the dashboard allow users to view only open or closed pull requests. Filters can be cleared, and the data can be refreshed.

**Save as JSON:** Users may save pull request data in JSON format so they may use it locally without needing a connection to GitHub API.

**Export CSV:** Users may export pull request data to Excel. Users can save the data to their own computer and can use the data with Excel's standardized options.

**GitHub Authorization:** Users have the ability to get authorized from GitHub and can view their GitHub repositories. The user will be directed to GitHub to sign-in and become authorized. The user will then be redirected back to PR Tracker with identifying information displayed in the header and a list of repositories below.

**Error Handling:** Visitors are promtly notified when a search has no results, the input field is lacking information, or if a page they attempt to visit doesn't exist.

## Tech Stack

<img width="40" height="34" alt="image" src="https://github.com/user-attachments/assets/c10b710a-e807-4ea9-b94e-cd9140356b2a" /> React

<img width="40" height="40" alt="image" src="https://github.com/user-attachments/assets/e778a716-f5ee-40e4-9880-e150895f818d" /> Typescript

<img width="40" height="25" alt="image" src="https://github.com/user-attachments/assets/6189b0c3-f23f-4d83-9b54-642c4960b45e" /> Tailwind CSS

<img width="40" height="36" alt="image" src="https://github.com/user-attachments/assets/cea20ac7-eb94-4d0c-9651-9c2cd48f7ac8" /> Jira

<img width="40" height="39" alt="image" src="https://github.com/user-attachments/assets/277f4d00-b10d-4df7-a8ce-c7c4adcb8aa3" /> Vercel

<img width="40" height="41" alt="image" src="https://github.com/user-attachments/assets/17a0d6ec-da91-4195-873d-cfc253c27029" /> Render

## Getting Started

Clone the project

```bash
git clone https://github.com/chingu-voyages/V57-tier2-team-22
```

Navigate to the project folder

```bash
cd V57-tier2-team-22
```

```bash
cd vite-project
```

Install dependencies

```bash
npm install
```

**Environment Setup**
This project uses two .env files — one for the server (backend) and one for the frontend (Vite app).

Server Environment (server/.env)

Create a .env file inside the server folder:

Add the following variables (from your GitHub Developer Settings → OAuth Apps → Your App):

```env
CLIENT_ID=your_github_client_id
CLIENT_SECRET=your_github_client_secret
PORT=3000
```

**Frontend Environment (vite-project/.env)**
Create a .env file inside the vite-project folder

All frontend variables must start with VITE_, so Vite can expose them to your app.
Add the following variables (your GitHub Personal Access Token)

```env
VITE_GITHUB_TOKEN=your_github_token
```

Run the development server

```bash
npm run dev
```

Open browser

```bash
http://localhost:5173/
```

## Our Team

- Kevin Llanos (Developer): [GitHub](https://github.com/KevinLlano) / [LinkedIn](https://linkedin.com/in/kevinllanos7/)
- Matthew Neie (Developer): [GitHub](https://github.com/MatthewNeie) / [LinkedIn](https://linkedin.com/in/matthew-neie)
- Jazz Bullecer (Developer): [GitHub](https://github.com/jazxbx) / [LinkedIn](https://www.linkedin.com/in/jazz-bullecer-89780928a)
- Thais Inatomi (Scrum Master): [GitHub](https://github.com/thaisaya) / [LinkedIn](https://www.linkedin.com/in/thaisaya/)
- Viral Barot (Product Owner): [LinkedIn](https://www.linkedin.com/in/viral-barot-mba/)

*Project requirements and team initiated by [Chingu](https://www.chingu.io/)*
