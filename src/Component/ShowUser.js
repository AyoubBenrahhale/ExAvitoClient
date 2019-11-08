import React, { Component }  from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUser } from '../action/UserAction';
import {Figure } from 'react-bootstrap';
import { Form, Button} from 'react-bootstrap';



export default  ({item}) => {
    return (
        <div>
        <div>{item.name}</div>
<div>{item.mail}</div>
<div>{item.avatar}</div>
</div>
    );

}