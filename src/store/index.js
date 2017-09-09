/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import {todos,filter} from './reducers'
import {createStore,combineReducers} from 'redux';
let reducer = combineReducers({
    todos,
    filter
});
let store = createStore(reducer);
export default store;