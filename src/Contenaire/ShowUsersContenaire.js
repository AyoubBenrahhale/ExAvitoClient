import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getAll} from '../action/UserAction'
import {CardDeck, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import ShowUser from '../Component/ShowUser';
import './style.css'


class ShowUsersContenaire extends React.Component{

    constructor() {
      super()
      
  }
  componentDidMount(){
    axios.get('http://localhost:8585/user')
    .then(res=>this.props.getAll(res.data))
    .catch(err => console.error(err));
    
    }
    
      
       onDeleteClick(pt_id) {
         axios.delete('http://localhost:8585/user/'+pt_id)
        .then(res=> console.log("trainee deleted"))
        .then(window.location.reload())
        .catch(err => console.error(err));
      }  
      
      OnUpdateClick(id) {
        this.props.history.push({ 
          pathname: '/UpdateUser', 
          state: { id: id} 
      }) 
     }  

  render(){
    const {listUsers} = this.props;
    return(
    listUsers && 
  <div>
<table class="table-fill">
<thead>
<tr>
<th className="text-left">Name</th>
<th className="text-left">Mail</th>
<th className="text-left">Avatar</th>
<th className="text-left">Delete</th>
<th className="text-left">Edit</th>


</tr>
</thead>
<tbody className="table-hover">
<tr>
  {listUsers.map((item)=>( 
  <div>
 
 <td>{item.name}</td>
 <td>{item.mail}</td>
 <td>{item.avatar}</td>
 <td>  <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, item.id)}>Delete</button></td>
 <td>  <button className="btn btn-primary ml-4" onClick={this.OnUpdateClick.bind(this,item.id)}>Update</button></td>
 
  
 
</div> ))}
</tr>
</tbody>
</table>

</div>); }}
    
ShowUsersContenaire.propTypes = {
  getAll: PropTypes.func.isRequired
}; 
  const mapStatetoProps = (state, ownProps) => {
    return {
        listUsers: state.rootReducer.Users.list
    }
  }


  export default connect(mapStatetoProps,{getAll})(ShowUsersContenaire);
