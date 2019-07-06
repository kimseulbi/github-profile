import React, { Component } from 'react'

export default class SearchBox extends Component {
    static defaultProps = {
        onCreatProfile: () => { }
    }
    constructor(props) {
        super(props);

        this.state = {
            name: 'kimseulbi'
        }
    }
    handleUserName(e) {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <input
                    type="text"
                    value={name}
                    placeholder="username..."
                    onChange={e => this.handleUserName(e)}
                />
                <button onClick={() => this.props.onCreatProfile(name)}>Search GitHub User</button>
            </div>
        )
    }
}
