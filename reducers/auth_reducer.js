import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from '../actions/types'
import { retry } from '../node_modules/rxjs/operator/retry';

export default function(state = {}, action){
    switch(action.type){
        case FACEBOOK_LOGIN_SUCCESS:
            return {token: action.payload}
        case FACEBOOK_LOGIN_FAIL:
            return {token: null}
        default:
            return state
    }
}
