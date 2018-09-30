import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navBarOpen: false
		}
	}

	navBarToggle() {
		this.setState({
			navBarOpen: !this.state.navBarOpen
		})
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Randy</NavbarBrand>
					<NavbarToggler onClick={this.navBarToggle.bind(this)} />
					<Collapse isOpen={this.state.navBarOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/blog">Blog</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/pages/page">Page</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavBar;
