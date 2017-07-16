<h2>Randy - a React/Redux application for WordPress.</h2>

Randy is a simple JavaScript application I built with React.js and Redux consuming JSON data served by a WordPress REST API. It supports standard features of WordPress such as posts, pages, comments, categories and tags.

<h3>Installation guide</h3>

<h4>1. Get a WordPress website</h4>
Install a WordPress website if you haven't already. You can get WordPress <a href="https://wordpress.org/" target="blank">here</a>. From version 4.7 WordPress comes with a built-in RESTful API. You will just need to install <a href="https://wordpress.org/plugins/better-rest-api-featured-images/" target="blank">Better REST API Featured Images</a> plugin in order to use Randy.
If you want to allow users to add comments through this application, add the following script <code>add_filter( 'rest_allow_anonymous_comments', '__return_true' );</code> either in your functions.php file or in a dedicated plugin.

<h4>2. Get Randy</h4>
Download this project on your machine. If you are cloning this repo with Git, you will need to switch to the branch <code>Randy</code> after cloning the repo to your machine. Install all required dependencies by launching the command <code>npm install</code> in the root of the project. Once you have all dependencies setup, run <code>npm start</code> to run the application locally. The application will be served at localhost:3000.

<h4>3. Set up</h4>
Jump to <code>/src/data/</code> and replace the URL contained in <code>globalUrl.js</code> with the actual URL of your WordPress website.

<h3>Layout</h3>
This project is built with <a href="https://v4-alpha.getbootstrap.com/" target="blank">Bootstrap 4</a> and Sass. I used Sass with a modular approach meaning that there are base Sass modules with mixins and variables as well as component-level modules containing styiling for each React component. Sass files are located into the <code>/src/style/</code> folder.

<h3>Development Environment</h3>
This project was bootstrapped with Create React App https://github.com/facebookincubator/create-react-app.

<h3>Usage in production</h3>
Randy is a sperimental application I built to test how well the WordPres REST API works together with React.js and Redux. It should not be used in production before a thorough test of all its features and components.
