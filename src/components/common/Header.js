import React, { Component } from 'react';
import { Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Button} from '@blueprintjs/core' ; 

class Header extends Component {

    render() {
        return (
            <div>
                
                <Navbar className="pt-dark">
                    <NavbarGroup>
                        <NavbarHeading>React  Redux Book Search</NavbarHeading>
                    </NavbarGroup>
                    <NavbarGroup align="right">
                        <Button className="pt-minimal" iconName="home" >Home</Button>
                        <Button className="pt-minimal" iconName="document">Books</Button>
                        <NavbarDivider />
                        <Button className="pt-minimal" iconName="user"></Button>
                        <Button className="pt-minimal" iconName="notifications"></Button>
                        <Button className="pt-minimal" iconName="cog"></Button>
                    </NavbarGroup>
                </Navbar>
                <hr></hr>
            </div>
        );

    }


}

export default Header; 