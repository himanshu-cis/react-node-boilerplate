import { USER } from '../_constants';

const initialState = {
    loggedIn: true,
    user: {}
}

export function users(state = initialState, action) {
  switch (action.type) {
    case USER.GETALL_REQUEST:
      return {
          ...state,
        loading: true
      };
    case USER.GETALL_SUCCESS:
      return {
          ...state,
        items: action.users
      };
    case USER.GETALL_FAILURE:
      return { 
          ...state,
        error: action.error
      };
    default:
      return state
  }
}