import React, { Component } from 'react'
import { Wrap, Title } from '../styled';

export default class Layout extends Component {
    render() {
        return (
            <Wrap>
                <Title>GITHUB PROFILE</Title>
                {this.props.children}
            </Wrap>
        )
    }
}
