# Remote-Code-Executor
RCE is a Remote Code Executor, as the name suggests Is a Docker-based sandbox environment to run a code snippet. It will create a new file for each code input, execute it, delete the file and return the output. It supports major languages, i.e., C++, JavaScript and Python, and can be extended to other language support too.

# Features:
- Minimal UI for user interaction and code submission.
- Can be extended to an Online Code Judge and full-fledged coding/interview platform.

# Tech stack: 
- React.js
- Javascript
- Material UI
- Vercel

# Concepts Used
- Frontend and Backend were made separate for making it possible to scale them individually.
- Pure components was made for each part and functionality in frontend, making the code easier to read and extend
- Monaco Editor was used as an interactive feature rich code editor
- Vercel was used to deploy frontend on a live link, with features like https, scalibility and CI/CD built in

# Steps to Run Locally
- Clone the Repo on your local computer
- Run `npm install` to install all the packages
```bash
npm install
```
- Run `npm start` to start the server locally
```bash
npm start
```
- Now you can view the server live at `http://localhost:3000`

# Basic Architecture
<img src="https://i.ibb.co/zbBg3xQ/Basic-Arch.png" alt="Basic Architecture" >

# Snapshots
<img src="https://i.ibb.co/PY9rs5V/Screenshot-from-2021-01-31-16-56-41.png" alt="Screenshot">

# Hosted Link
The frontend is hosted and live at [rce-frontend.vercel.app](https://rce-frontend.vercel.app)
