import {todos,filter} from './reducers'
import {createStore,combineReducers} from 'redux';
let reducer = combineReducers({
    todos,
    filter
});
let store = createStore(reducer);
export default store;