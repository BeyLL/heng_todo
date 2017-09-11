/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DELETE_TODO, TOGGLE_TODO} from '../store/action-types'
class TodoList extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.todos.map((item, index) => (
                    <li style={{listStyle: 'none'}} key={index}>
                        <div className="list-group-item">
                            <input type="checkbox" onChange={() => this.props.toggleTodo(item.id)}
                                   checked={item.completed}
                            />
                            <span style={{marginLeft: '7px',textDecoration:item.completed?'line-through':''}}>{item.title}</span>
                            <span className="pull-right">
                                 <button className="btn btn-danger btn-xs" onClick={() => {
                                     this.props.deleteTodo(item.id);
                                 }
                                 }>
                                     x
                                 </button>
                            </span>
                        </div>
                    </li>
                ))
                }


            </ul>
        )
    }
}
export default connect(
    state => ({
        todos: state.todos
    }),
    {
        deleteTodo: id => ({type: DELETE_TODO, id}),
        toggleTodo: id => ({type: TOGGLE_TODO, id})
    }
)(TodoList)