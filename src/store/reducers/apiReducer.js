import {pingApiAction, pingApiGetAction} from '../actions/actions';

// Reducer
const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case pingApiAction.type:
      return {...state};
    case pingApiGetAction.type:
      console.log(action);
      
      return {...state, message: action.message};
    default:
      return state;
  }
};

export default apiReducer;
