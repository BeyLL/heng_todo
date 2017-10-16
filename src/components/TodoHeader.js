import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ADD_TODO} from '../store/action-types'
class TodoHeader extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    handelKeyDown= e =>{
        if(e.keyCode===13&&e.target.value){
            const {addTodo} = this.props;
            let title = e.target.value;
            console.log(title);
            addTodo(title);
            e.target.value = '';

        }
    };
    render(){
        return (
            <input type="text" className="form-control" placeholder="请输入要你的未来"  onKeyDown={this.handelKeyDown}/>
        )
    }
}

export default connect(
    state=>({}),
    dispatch=>({
        addTodo:(title)=>dispatch({type:ADD_TODO,title})
    })
)(TodoHeader)