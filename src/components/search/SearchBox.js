import React, { Component } from 'react';
import { ControlGroup, InputGroup, Button } from '@blueprintjs/core';

export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <ControlGroup fill={true} vertical={false}>
                    <InputGroup placeholder="Enter Book Details" />
                    <Button iconName="filter">Search</Button>
                </ControlGroup>
            </div>
        );
    }
}