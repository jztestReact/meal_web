# meal_web

**#Project Documentation: React Front-End Website with CI/CD Pipeline**

Overview

This project is a React-based web application that features three menu tabs: Breakfast, Lunch, and Dinner. The project is designed to showcase front-end skills, integrating Git version control and a CI/CD pipeline for automated testing and deployment. The project follows best DevOps practices and is automatically deployed to Vercel upon changes.

![image](https://github.com/user-attachments/assets/fec459ff-2af8-46c4-b1c1-1aca6519cb31)

**Tech Stack:**
Front-End
Next.js
TypeScript
TailwindCSS
ShadCN/UI
Next-Themes
Jest & React Testing Library
**CI/CD & Deployment**
GitHub Actions
Vercel

**Setup Instructions**

1. Clone the Repository

`git clone "HTTPs of this link`

`cd meal_web`

2. Install Dependencies

`npm install`

3. Run the Development Server

`npm run dev`

The app will be available at: http://localhost:3000

4. Run Unit Tests
   open a new terminal: run 'cd meal_web'
   For test:
   `npm test`

**update working branch change:**
`git add .`
`git commit -m "change detail"`
`git push origin working_branch`


base on the requirement, wen can use `git merge` or `git rebase(recommend)`;

github run action for ci/cd pipeline:
![image](https://github.com/user-attachments/assets/b56a2f3b-bfc7-48be-a4cc-8d32bdd9933e)
![image](https://github.com/user-attachments/assets/449e7ba1-fb85-4d40-8d12-7e0bb6e0725d)
![image](https://github.com/user-attachments/assets/1e28499a-e93a-4a05-b1c3-ca50e093efff)



