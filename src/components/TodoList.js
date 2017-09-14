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
                    <li style={{listStyle: 'none',marginTop:'8px'}} key={index}>
                        <div className="list-group-item">
                            <input type="checkbox" onChange={() => this.props.toggleTodo(item.id)}
                                   checked={item.completed}
                            />
                            <span style={{marginLeft: '7px',textDecoration:item.completed?'line-through':''}}>{item.title} {item.time}</span>
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
        todos: state.todos.filter(item=>{
            switch(state.filter){
                case 'active':
                    return !item.completed;
                case 'completed':
                    return item.completed;
                default:
                    return true;

            }
            }
        )
    }),
    {
        deleteTodo: id => ({type: DELETE_TODO, id}),
        toggleTodo: id => ({type: TOGGLE_TODO, id})
    }
)(TodoList)