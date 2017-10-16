import {ADD_TODO, DELETE_TODO, TOGGLE_TODO,DELETE_ALL,CHANGE_EDITING,TOGGLE_ALL} from '../action-types'
//todo的reducer
export default function (state = {editingId:'',list:[]}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list:[...state.list, {id: Date.now(), title: action.title, completed: false,time:new Date().toLocaleString()}]};
        case DELETE_TODO:
            return {
                ...state,
                list:state.list.filter(item => {
                return item.id != action.id
            })};
        case TOGGLE_TODO:
            return {
                ...state,
                list:state.list.map(item => {
                if (item.id === action.id){
                    item.completed = !item.completed;
                }
                return item;
            })};
        case DELETE_ALL:
            return {
                ...state,
                list:state.list.filter(item=>!item.completed)
            };
            case CHANGE_EDITING:
            return {
                ...state,
                editingId:action.id
            };
            case TOGGLE_ALL:
            return {
                ...state,
                list:state.list.map(item=>{
                    item.completed = action.check;
                    return item
                })
            }
        default:
            return state;
    }

}