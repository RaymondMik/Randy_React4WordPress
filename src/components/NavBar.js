import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			<a className="navbar-brand" href="#">Randy</a>
			<div className="" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/pages/about">About</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar;
