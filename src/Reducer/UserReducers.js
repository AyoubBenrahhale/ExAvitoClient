import * as actionsFile from '../action/actionsFile'

const initialState ={
    list:[],
   }

export default(state=initialState,action)=>{
    switch(action.type){
        case actionsFile.GET_ALL:
            return {
                list:action.payload 
                  }
        case actionsFile.ADD_USER:
            return { 
                list:[...state.list,action.payload]  
                    }
        case actionsFile.DELETE_USER:
            return {
                ...state,
                list: [...state.list.filter(user =>user.id !== action.payload)]
                };


        default:
        return state
    }
}
       
  
