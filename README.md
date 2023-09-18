# Tenet — the skateboard website

This is a website I designed and built for a startup I worked on called Tenet. The website can be found here: tenet-skateboard.web.app.



# Details for Nerds
### To Deploy Website
Change firebase.json as follows:
"hosting": {    
    "public": "build",
  },

Then run the following to build all of the files: npm ci && npm run build

Then deploy the website: firebase deploy --only hosting:tenet-skateboard
