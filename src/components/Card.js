import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {
            name,
            avatar_url,
            public_repos,
            followers,
            html_url,
        } = this.props;
        return (
            <div>
                <a href={html_url} target="_blank">
                    <img src={avatar_url} />
                </a>
                <h2 >
                    <a href={html_url} target="_blank">{name}</a></h2>
                <dl>
                    <dt>Number of public repos</dt>
                    <dd>{public_repos}</dd>

                    <dt>Number of followers</dt>
                    <dd>{followers}</dd>
                </dl>
            </div>
        )
    }
}
