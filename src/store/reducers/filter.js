/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import {CHANGE_FILTER,COMPLETED} from '../action-types'
export default function (state = 'all', action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}