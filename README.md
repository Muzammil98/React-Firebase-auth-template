## About the repo
### Demo: react-firebase-oauth-template.vercel.app

This repo provides a react template containing 
  - Firebase authentication with Google, Github.
  - Auth Context using context api & hook
  - Material Ui
  - Starter design template

## Usage

After clonning the repo you will find the Login module in `containers/Login` and firebase config in `utils/firebase`.
Add your firebase configuration and make sure firebase authentication's multiple account from single email is enabled otherwise it may cause issues inn same person to login from different providers, the app will now be running smoothly.
Don't push the code here as this repo is connected with vercel deployment for the demo purpose. Take the code and enjoy :) 

## Available Scripts
  - `npm start`: Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - `npm run build`
