# corporate-website
New website

- Run `npm run dev` to start development server (NodeJS And React)
- Alternatively , You can run using docker-compose
```
docker-compose run server npm install
docker-compose run client yarn
docker-compose up -d
``` 
- Accessible at [http://localhost:3000](http://localhost:3000)
- Change Mongo URL in `.env` file

Server
- On Start Server calls all files in `/boot` directory in alphabetically to setup environment. 
- MVC Structure

Client
- update client/src/config.js for prediction node base url
- Pages in `client/src/pages` directory are organised as per route nesting structure
- Uses `Css Modules` inbuilt into create-react-app for styling (Css Modules provides namespacing in css and avoids css class coalitions)
- Uses `react-helmet` to change page title
- Uses SCSS for styling

Routes
- /newsroom : The Newsroom Page
- /social : The Social Media Landing Page
- /admin : The Admin Panel
- /careers : The Career Page
- /ideas/:slug : The Blog Page
