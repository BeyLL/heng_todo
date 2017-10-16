import {CHANGE_FILTER} from '../action-types'
export default function (state = 'all', action) {  //这个切换就是切换的过滤器all/active/completed
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}