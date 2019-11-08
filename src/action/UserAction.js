import * as actionsFiles from './actionsFile'


export const getAll = data => dispatch => {

    dispatch({
        type:actionsFiles.GET_ALL,
        payload: data,
    });

};

export const addUser = data =>  dispatch => {

    dispatch({
        type:actionsFiles.ADD_USER,
        payload: data,
    });

};




export const deleteUser = pt_id => dispatch =>{
  
   dispatch({
       type : actionsFiles.DELETE_USER, 
       payload: pt_id,
       meta: {
        offline: {
          // the network action to execute:
          effect: { url: 'http://localhost:8585/user/', method: 'delete', body: { pt_id } },
          // action to dispatch when effect succeeds:
          commit: { type: 'DELETE_USER_COMMIT', meta: { pt_id } },
          // action to dispatch if network action fails permanently:
          rollback: { type: 'DELETE_USER_ROLLBACK', meta: { pt_id } }
        }
      }
   });
   }


        export const Details = data => dispatch =>{

           dispatch({
               type : actionsFiles.GET_USER, 
               payload: data
           });
           
           }
          
           export const Update = data => dispatch =>{

               dispatch({
                   type : actionsFiles.UPDATE_USER, 
                   payload: data
               });
               
               }
           
       

