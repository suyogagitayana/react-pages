# GitHub Pages with React - Quick Start Guide

This guide will walk you through the process of setting up GitHub Pages using React JS and Tailwind CSS.

***Please note that this guide assumes you already have a basic understanding of React JS and have installed Node.js, npm, and other necessary tools for your development environment.***

---

## **Prerequisites**

Before you begin, make sure you have the following prerequisites in place:

1. Node.js and npm installed on your machine.
2. A GitHub repository.

### **Step 1: Clone the Template**

- Clone the template repository to your GitHub account by clicking on the "Fork" button at the top right corner of the repository page. This will create a copy of the template in your own GitHub repository.

- Open the cloned repository in your preferred code editor.

### **Step 2: Configure package.json**

- Open the `package.json` file in the root directory of the project.

- Add the following line inside the JSON object:
```json
"homepage": "https://yourusername.github.io/repositoryname"
```

- Replace `yourusername` with your GitHub username and `repositoryname` with the name of your repository.


### **Step 3: Install Dependencies**

- In your terminal or command prompt, navigate to the project's root directory.

- Run the command `npm install` to install the required packages. This will fetch and install all the necessary dependencies defined in the package.json file.

### **Step 4: Customize Your Templates**

- Start crafting your templates by editing the React components located in the `/src` directory. Feel free to modify the existing components or create new ones as needed.

- For reference on Tailwind CSS classes, you can visit the official Tailwind CSS documentation at https://tailwindcss.com/docs.

### **Step 5: Preview or Deploy**
- After customizing your templates, you have two options for previewing or deploying your website:

    - Preview: Run the command `npm start` start a local development server and preview your template. This will launch the development server, and you can view your website by visiting http://localhost:3000 in your browser.
    
    - Deploy: Run the command `npm run deploy` deploy your website on GitHub Pages. This command will build your React application and deploy it to the gh-pages branch of your GitHub repository. Wait for a few minutes after the deployment completes for the changes to take effect.

---

## **Troubleshooting**
If you encounter any issues with your GitHub Pages deployment, follow these steps:

- Wait: Deployment might take a while to go live. Wait for a few minutes and try accessing your pages again.

- Check Branch Settings: Ensure that you have selected the correct branch (gh-pages) for GitHub Pages deployment in your repository settings.

- Check the Repository Actions tab: Go to your repository page and click on the Actions tab. There should be workflow named "page build and deployment", if the latest workflow don't have green checkmark try canceling it and rerun the workflow.

- Check GitHub Status Page: Make sure the Github actions and pages status are not down/ on maintenance.

- Consult GitHub Pages Documentation: If the previous steps didn't resolve your issue, refer to the GitHub Pages documentation for further guidance.

By following these steps, you can set up GitHub Pages with React JS and Tailwind CSS and deploy your custom templates to share with others.

---

## Happy coding! ^_^)/

