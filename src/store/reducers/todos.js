import {ADD_TODO, DELETE_TODO, TOGGLE_TODO,DELETE_ALL} from '../action-types'
//todo的reducer
export default function (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: Date.now(), title: action.title, completed: false,time:new Date().toLocaleString()}];
        case DELETE_TODO:
            return state.filter(item => {
                return item.id != action.id
            });
        case TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.id){
                    item.completed = !item.completed;
                }
                return item;
            });
        case DELETE_ALL:
            return state.filter(item=>!item.completed);
        default:
            return state;
    }
}