import {ADD_TODO, DELETE_TODO, TOGGLE_TODO,DELETE_ALL,CHANGE_EDITING,TOGGLE_ALL,UPDATE_TODOS} from '../action-types'
//todo的reducer
let list = localStorage.getItem('my')?JSON.parse(localStorage.getItem('my')):[];
let initialState = {editingId:'',list}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        let list = [...state.list,{id: Date.now(), title: action.title, completed: false}]
        localStorage.setItem('my',JSON.stringify(list))
            return {
                ...state,
                list
            }
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
            };
            case UPDATE_TODOS: 
            let waiteTodos  = JSON.parse(localStorage.getItem('my'));
                list= waiteTodos.map(item=>{
                if(item.id===action.id){
                    item.title=action.title
                }
                return item;
            })
           localStorage.setItem('my',JSON.stringify(list))
            return {
                ...state,
                list
            }
        default:
            return state;
    }

}