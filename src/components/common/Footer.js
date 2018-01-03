import React, { Component } from 'react';
import { HeroFoot, Tabs, Container, Tab , Footer,  Content} from 're-bulma';

class OurFooter extends Component {

    render() {
        return (
            <HeroFoot>
                <Tabs tabStyle="isBoxed">
                    <Container>
                        <ul>
                            <Tab>Overview</Tab>
                            <Tab>Modifiers</Tab>
                            <Tab>Grid</Tab>
                            <Tab>Elements</Tab>
                            <Tab>Components</Tab>
                            <Tab>Layout</Tab>
                        </ul>
                    </Container>
                </Tabs>
                <Footer>
                    <Container>
                        <Content>
                            <p style={{ textAlign: 'center' }}>
                                <strong>reBulma</strong> by <a href="https://github.com/bokuweb">bokuweb</a>. The source code is licensed
                                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                                    </p>
                            <p style={{ textAlign: 'center' }}>
                                <a className="icon" href="https://github.com/bokuweb/re-bulma">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </Content>
                    </Container>
                </Footer>
            </HeroFoot>
        );
    }


}

export default OurFooter; 
