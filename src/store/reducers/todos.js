/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import {ADD_TODO,DELETE_TODO} from '../action-types'
//todo的reducer
export default function (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: Date.now(), title: action.title, completed: false}];
        case DELETE_TODO:
            return state.filter(item=>{
               return  item.id!=action.id
            });
        default:
            return state;
    }
}