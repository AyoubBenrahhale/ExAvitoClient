import React from 'react'
import { Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios';
import {getUser} from '../action/UserAction'

import history from '../history'




class UpdateUser extends React.Component {

    constructor() {
        super()
        this.state = {
            id:'',
            name: '',
            mail: '',
            avatar:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSend = this.onSend.bind(this);
       
        
    }
    componentDidMount() {
        axios.get('http://localhost:8585/user/'+this.props.location.state.id)
        .then(res=>{
            this.setState({ 
              id: res.data.id, 
              name: res.data.name,
              mail: res.data.mail,
              avatar: res.data.avatar });
        })
        .catch(err => console.error(err));
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
        

    }


    onSend(event,pt_id) {
        
        event.preventDefault();
        const User =
            { ...this.state}
         axios.put('http://localhost:8585/user/'+User.id,User)
        .then(console.log(User))
          .then(history.push({
            pathname:'/ShowUsers' }))
         .then(window.location.reload())  
    }

   
    
    render() {
        const {id,name,mail,avatar} = this.state
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <Form className="justify-content-center" onSubmit={this.onSend}>
                        <Form.Group controlId="formBasicId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control 
                                            type="text" 
                                            name="id" 
                                            placeholder="Enter your id" 
                                            value={id} 
                                            onChange={this.handleChange} 
                                             />
                            </Form.Group>

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

                            <Form.Group controlId="formBasicMail">
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


export default (UpdateUser)

