// auth reducer 
// 1st reducer
import { FETCH_USER } from '../actions/types';
//null because we dont want to return user info b4 logged in
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}