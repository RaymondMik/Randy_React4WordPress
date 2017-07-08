<h2>Randy - a React/Redux application for WordPress.</h2>

Randy is a simple JavaScript application I built with React.js and Redux consuming JSON data served from the WordPress REST API. It supports standard features of WordPress such as posts, pages, comments, categories and tags.

<h3>Installation guide</h3>

<h4>1. Set up a WordPress website</h4>
Install a WordPress website if you haven't already. You can get WordPress <a href="https://wordpress.org/" target="blank">here</a>. From version 4.7 WordPress comes with a built-in RESTful API. You will just need to install <a href="https://wordpress.org/plugins/better-rest-api-featured-images/" target="blank">Better REST API Featured Images</a> plugin in order to use Randy.
If you want comments to be enabled, add the following script <code>add_filter( 'rest_allow_anonymous_comments', '__return_true' );</code> either in your functions.php file or in a dedicated plugin.

<h4>2. Get Randy</h4>
Clone or download this project on your machine. Install all required dependencies by launching the command <code>npm install</code> in the root of the project. Once you have all dependencies setup, run <code>npm start</code> to run the application locally, the website will be served at localhost:3000.

<h4>3. Set up</h4>
Jump to <code>/src/data/</code> and replace the URL contained in <code>globalUrl.js</code> with the actual URL of your WordPress website.

<h3>Development Environment</h3>
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<h3>Usage in production</h3>
Randy is a sperimental application I built to test how well the WordPres REST API works together with React.js and Redux. It should not be used in production before a thorough test of all its features and components. 
