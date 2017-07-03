import React, { Component } from 'react';
import {Link} from 'react-router';

class Main extends Component {
  render() {

    return (
    	<div>
			<input type="checkbox" id="navbar-toggle" name="" value="" />
			<div className="page-wrap">
				<label htmlFor="navbar-toggle" className="toggle-button">☰</label>
				<div className="navbar">
					<div className="navbar-photo-container">
						<img src={'http://ramonmiklus.com/restapi/wp-content/uploads/2017/02/photo.jpg'} className="navbar-photo" role="presentation" />
					</div>
					<div className="navbar-logo">
						<h1>Ram&oacute;n Miklus</h1>
						<h3>JavaScript Developer</h3>
					</div>
					<ul className="navbar-social">
						<li><a href='https://si.linkedin.com/in/ramón-miklus-9ba06811' target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li><a href='https://github.com/RaymondMik' target="blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
						<li><a href='http://codepen.io/RamonMO/' target="blank"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
					</ul>
					<ul className="navbar-menu">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/blog">Blog</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
					<div className="navbar-footer">
						<p className="credits">I built this with: </p>
						<img src={'http://ramonmiklus.com/restapi/wp-content/uploads/2017/02/react.png'} className="react-logo" alt="React.js Logo" role="presentation" />
						<p className="plus">+</p>
						<img src={'http://ramonmiklus.com/restapi/wp-content/uploads/2017/02/wp.png'} className="wp-logo" alt="WordPress Logo" role="presentation" />
					</div>
				</div>
    	    { React.cloneElement(this.props.children, this.props) }
			</div>
    	</div>
    );
  }
}

export default Main;
