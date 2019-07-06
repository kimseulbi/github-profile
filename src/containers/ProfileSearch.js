import React, { Component } from 'react';
import api from "../api"
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';

export default class ProfileSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'kimseulbi',
            avatar_url: '',
            public_repos: '',
            followers: '',
            html_url: '',
        }
    }
    async componentDidMount() {
        const { data: profile } = await api.get('/users/' + this.state.name)
        this.setState({
            ...profile
        })
        console.log(profile);
    }
    handleCreatProfile = async (name) => {
        const { data } = await api.get('/users/' + name)
        this.setState({
            ...data
        })
        console.log(data)
    }
    render() {
        return (
            <div>
                <SearchBox onCreatProfile={this.handleCreatProfile} />
                <Card {...this.state} />
            </div>
        )
    }
}
