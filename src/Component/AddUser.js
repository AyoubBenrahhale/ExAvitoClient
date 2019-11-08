import React from 'react'
import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
//import { createUser } from '../../Actions/UserActions';
import { connect } from 'react-redux'
import axios from 'axios';

import history from '../history'




class AddUser extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            mail: '',
            avatar:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSend = this.onSend.bind(this);
       
        
    }
    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
        

    }


    onSend(event) {
        
        event.preventDefault();
        const User =
            { ...this.state}
         axios.post('http://localhost:8585/user',User)
        .then(console.log(User))
          .then(history.push({
            pathname:'/ShowUsers' }))
         .then(window.location.reload())  
    }

   
    
    render() {
        const {name,mail,avatar} = this.state
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <Form className="justify-content-center" onSubmit={this.onSend}>


                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                            type="text" 
                                            name="name" 
                                            placeholder="Enter your Name" 
                                            value={name} 
                                            onChange={this.handleChange} 
                                             />
                            </Form.Group>

                            <Form.Group controlId="formBasicCIN">
                                <Form.Label>Mail</Form.Label>
                                <Form.Control 
                                            type="text" 
                                            name="mail" 
                                            placeholder="Enter your Email" 
                                            value={mail} 
                                            onChange={this.handleChange} 
                                             />
                            </Form.Group>

                            
                            <Form.Group>
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control 
                                            type="text"
                                            name="avatar"
                                            placeholder="Enter your Avatar"
                                            value={avatar}
                                            onChange={this.handleChange} 
                                             />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                            
                            
                        </Form>
                    </div>
                </div>
            </div>

        )   
    }
}




export default (AddUser);