import React, { Component } from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';

class Main extends Component {
  render() {

    return (
    	<div>
    		<NavBar />
    		<div className="container">
				{ React.cloneElement(this.props.children, this.props) }
			</div>
    	</div>
    );
  }
}

export default Main;
