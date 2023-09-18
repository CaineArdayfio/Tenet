# Tenet — the skateboard website

This is a website I designed and built for a startup I worked on called Tenet. The website can be found here: tenet-skateboard.web.app.

### To Deploy Website
Change firebase.json as follows:
"hosting": {    
    "public": "build",
  },

Then run the following to build all of the files: npm ci && npm run build

Then deploy the website: firebase deploy --only hosting:tenet-skateboard

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
