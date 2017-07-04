import React, { Component } from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';

class Main extends Component {
  render() {

    return (
    	<div>
    		<NavBar />
			{ React.cloneElement(this.props.children, this.props) }
    	</div>
    );
  }
}

export default Main;
