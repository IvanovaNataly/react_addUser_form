import React, { Component } from 'react';
import TopBar from './TopBar'; 
import List from './List'; 
import Card from './Card';
import Form from './Form';

export default class App extends Component {
    constructor() {
        super();
        this.state = { profile: {
                name: "Trevor",
                age: "30/06/1978",
                url: "/static/icons/trevor.png"
            }
        }
    }

    updateUserState(profile) {
        this.setState({profile});
        if (this.state.newUser)
            delete this.state.newUser;
    }

    updateNewUser(newUser) {
        this.setState({newUser});
        this.setState({profile: newUser});
    }

    render() {
        return (
        <div className="app">
            <TopBar/>
            <main className="content">
                <List updateUser={this.updateUserState.bind(this)} newUser={this.state.newUser}/>
                <div className="right-clmn">
                    <Form onNewUserEntered={this.updateNewUser.bind(this)}/>
                    <Card card={this.state.profile}/>
                </div>
            </main>
        </div>
        )
    }

}
