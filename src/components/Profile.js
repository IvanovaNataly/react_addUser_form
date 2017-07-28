import React, { Component } from 'react';

export default class Profile extends Component {

    userChosen(e) {
        let name = parseInt(e.currentTarget.getAttribute("id"));
        this.props.onUserChosen(name);
    }

    render() {
        return (
            <div className="profile" id={this.props.id} onClick={this.userChosen.bind(this)}>
                <img className="profImg" src={this.props.faces.url}  />
                <h3>{this.props.faces.name}</h3>
                <p>{this.props.faces.age}</p>
            </div>
        )
    }
}

   