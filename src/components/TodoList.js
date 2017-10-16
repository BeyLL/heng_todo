//passionZhang  2017/10/15
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DELETE_TODO, TOGGLE_TODO,CHANGE_EDITING,TOGGLE_ALL} from '../store/action-types'
class TodoList extends Component {
    constructor() {
        super();
        this.changeContent  = this.changeContent.bind(this)
        this.changeEditing = this.changeEditing.bind(this)
        this.state = {
            title:''
        }
    }

    changeEditing(id){
        let item = this.props.todos.find(item=>item.id ===id)
        this.title = item.title
        this.props.changeEditing(id)
        this.setState({
             title:item.title
})
    }
    changeContent(event){
      this.setState({
        title:event.target.value
      })
    }
    render() {
        return (
            <div>
            <ul className="list-group">
            {
                this.props.todos.length>0?  <li className="list-group-item">
            <input 
            type="checkbox" 
            onChange={event=>this.props.toggleAll(event.target.checked)}
            checked={this.props.activeCount==0}/>
            {this.props.activeCount==0?'全部取消':'全部选中'}
           </li>:''
            }
         
                {this.props.todos.map((item, index) => (
                    <li style={{listStyle: 'none',marginTop:'8px'}} key={index}>
                        <div className="list-group-item">
                            <input type="checkbox" 
                            onChange={() => this.props.toggleTodo(item.id)}
                                   checked={item.completed} />
                            { 
                            this.props.editingId===item.id?


                            <input type="text"  value={item.title}
                             onChange={this.changeContent}

                            />:
                            <span
                            onDoubleClick={this.changeEditing(item.id)}
                            style={{marginLeft: '7px',textDecoration:item.completed?'line-through':''}}>{item.title} {item.time}</span>
                            }

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
            </div>
        )
    }
}
export default connect(
    state => ({
        todos: state.todos.list.filter(item=>{
            switch(state.filter){
                case 'active':
                    return !item.completed;
                case 'completed':
                    return item.completed;
                default:
                    return true;

            }
            }),
        activeCount: state.todos.list.filter(item => !item.completed).length,
        editingId: state.todos.editingId
    }),

    {
        deleteTodo: id => ({type: DELETE_TODO, id}),
        toggleTodo: id => ({type: TOGGLE_TODO, id}),
        changeEditing: id=>({type:CHANGE_EDITING,id}),
        toggleAll: check=>({type:TOGGLE_ALL,check})
    }
)(TodoList)