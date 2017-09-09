/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import React, {Component} from 'react';
export default class TodoList extends Component{
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item">学习redux</li>
                <li className="list-group-item">学习mobx</li>
            </ul>
        )
    }
}