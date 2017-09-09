/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.todos.map((item, index) => {
                    return <li style={{listStyle:'none'}}>
                        <div className="list-group-item">
                            <input type="checkbox"/>
                            <span style={{marginLeft:'7px'}}>{item.title}</span>
                            <span className="pull-right">
                                 <button className="btn btn-danger btn-xs">
                                     x
                                 </button>
                            </span>
                        </div>
                    </li>
                })}

            </ul>
        )
    }
}
export default connect(
    state => ({
        todos: state.todos
    })
)(TodoList)