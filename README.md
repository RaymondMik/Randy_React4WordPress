<h3>This project is no longer maintained</h3>

<h2>Randy - a React application for WordPress.</h2>
<p>Randy is a simple JavaScript client-side application built with React.js and Redux consuming JSON data served by a WordPress REST API. It supports standard features of WordPress such as posts, pages, comments, categories and tags.</p>
<h5 align="center">Preview</h5>
<p align="center">
 <img src="https://github.com/RaymondMik/Randy_React4WordPress/blob/Randy/src/assets/images/screenshot.png" width="600" title="Preview of Randy">
</p>

<h3>Installation guide</h3>
<h4>1. Get a WordPress website</h4>
Install a WordPress website if you haven't already. You can get WordPress <a href="https://wordpress.org/" target="blank">here</a>. From version 4.7 WordPress comes with a built-in RESTful API.
If you want to allow users to add comments through this application, add the following script <code>add_filter( 'rest_allow_anonymous_comments', '__return_true' );</code> either in your functions.php file or in a dedicated plugin.

<h4>2. Get Randy</h4>
Clone this repo with Git and install all required dependencies on your local machine by launching the command <code>npm install</code> in the root of the project. Once you have all dependencies setup, run <code>npm start</code> to run the application locally. The application will be served at localhost:3000.

<h4>3. Set up</h4>
Jump to <code>./src/data/</code> and replace the URL contained in <code>globalUrl.js</code> with the actual URL of your WordPress website.

<h3>How it works</h3>
Randy uses the Redux Sagas defined in <code>./src/sagas</code> to fetch data from a WordPress API by calling the functions in <code>./src/data/callsHandler.js</code> and making a number of network calls to the endpoints related to the URL defined in <code>./src/data/globalUrl.js</code>. Those Sagas dispatch the actions in <code>./src/actions</code> when the call is made and when either the data or an error are received from the WordPress API. The reducers in <code>./src/reducers</code> then update the application state accordingly. Finally, the components in the React UI in <code>./src/components</code> render the data provided by the Redux store.

<h3>Layout</h3>
This project is built with <a href="https://v4-alpha.getbootstrap.com/" target="blank">Bootstrap 4</a> and Sass using a Mobile First approach. There are base Sass modules with mixins and variables as well as component-level modules containing styiling for each React component. Sass files are located into the <code>/src/style/</code> folder.

<h3>Development Environment</h3>
This project was bootstrapped with Create React App <a href="https://github.com/facebookincubator/create-react-app"target="blank">https://github.com/facebookincubator/create-react-app</a>. You can find there detailed information about how running a production build, testing and other features.

<h3>Disclaimer</h3>
Please keep in mind that Randy is just a sperimental application I built to check how well the WordPress REST API works together with Redux and React.js. Fork this repo if you want to contribute to it!
