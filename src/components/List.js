import React, { Component } from 'react';
import Profile from './Profile'; 

export default class List extends Component {
    constructor() {
        super();
        this.faces= [
            {
                name: "Pat",
                age: "30/06/1978",
                url: "/static/icons/pat.png"
            },
            {
                name: "Andrew",
                age: "30/06/1978",
                url: "/static/icons/andrew.png"
            },
            {
                name: "Josh",
                age: "30/06/1978",
                url: "/static/icons/josh.png"
            },
            {
                name: "Jan",
                age: "30/06/1978",
                url: "/static/icons/jan.png"
            },
            {
                name: "Nataly",
                age: "30/06/1978",
                url: "/static/icons/nataly.jpg"
            },
            {
                name: "Trevor",
                age: "30/06/1978",
                url: "/static/icons/trevor.png"
            }
        ]
        
    }
    // shouldComponentUpdate() {
    //     return false;
    // }
 
    componentWillReceiveProps(nextProps) {
        this.faces.unshift(nextProps.newUser);
    }

    setUserData(id) {
        this.props.updateUser(this.faces[id]);
    }

    renderProfiles() {
        let profiles = [];
        for (let i=0; i<this.faces.length; i++) {
            if (this.faces[i])
                profiles.push( <Profile key={i} faces={this.faces[i]} id={i}
                         onUserChosen={this.setUserData.bind(this)}/>)
        }
        return profiles;
    }


    render() {
        return (
        <div className="profiles-list">   
            {this.renderProfiles()}
        </div>
        )
    }

}