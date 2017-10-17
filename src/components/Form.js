import React, { Component } from 'react';

export default class Form extends Component {

    componentDidMount() {
        this.$name = document.querySelector('#name');
        this.$bithday = document.querySelector('#birthday');
        this.$url = document.querySelector('#image');
    }

    getNewUser() {
        let newUser = {};
        newUser.name = this.$name.value;
        newUser.age = this.$bithday.value;
        newUser.url = this.$url.value;
        this.clearForm();
        this.props.onNewUserEntered(newUser);
    }

    clearForm() {
        this.$name.value = "";
        this.$bithday.value = "";
        this.$url.value = "";
    }


    render() {
        return (
            <div className="form-area">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" name="name" className="form-control" placeholder="User Name"></input>
                    </div>

                    <div className="form-group">
                            <label htmlFor="birthday" className="form-label">Rating</label>
                            <input type="text" id="birthday" name="birthday" className="form-control" placeholder="Birthday"></input>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="image" className="form-label">Website</label>
                        <input type="text" id="image" name="image" className="form-control" placeholder="Image"></input>
                    </div>
  
                    <button id="create" type="button"  onClick={this.getNewUser.bind(this)}>CREATE NEW PROFILE</button>
                </form>
            </div>
        )
    }
}



 









