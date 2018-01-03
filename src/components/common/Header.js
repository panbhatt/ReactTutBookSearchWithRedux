import React, { Component } from 'react';
import { HeroHead, Nav, Container, NavItem, NavToggle, NavGroup, Button } from 're-bulma';
import { Link, IndexLink } from 'react-router';


class Header extends Component {

    render() {
        return (
            <HeroHead>
                <Nav>
                    <Container>
                        <NavGroup align="left">
                            <NavItem>
                                <img src="logo.png" alt="Logo" />
                            </NavItem>
                        </NavGroup>
                        <NavToggle />
                        <NavGroup align="right" isMenu>
                            <NavItem isActive>
                                <IndexLink to="/">Home</IndexLink>
                            </NavItem>
                            <NavItem>
                                <Link to="/login">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Button states="isInverted" icon="fa fa-github">Github</Button>
                            </NavItem>
                        </NavGroup>
                    </Container>
                </Nav>
            </HeroHead>
        );

    }


}

export default Header; 