import React, {Component} from  'react';
import {connect} from 'react-redux';
import {DELETE_ALL,CHANGE_FILTER} from '../store/action-types'
class TodoFooter extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-3" style={{lineHeight: '35px'}}>
                    还有{this.props.activeCount}件待办
                </div>
                <div className="col-sm-6">
                    <button
                        onClick={()=>this.props.changeFilter('all')}
                        className={"btn "+(this.props.filter==='all'?'btn-success': 'btn-default')}>全部</button>
                    <button
                        onClick={()=>this.props.changeFilter('active')}
                        className={"btn "+(this.props.filter==='active'?'btn-success': 'btn-default')}>未完成</button>
                    <button
                        onClick={()=>this.props.changeFilter('completed')}
                        className={"btn "+(this.props.filter==='completed'?'btn-success': 'btn-default')}>已完成</button>
                </div>
                <div className="col-sm-3">
                    {
                        this.props.completedCount > 0 ? <button className="btn btn-danger" onClick={this.props.deleteAll} >清除已完成</button> : null
                    }

                </div>
            </div>
        )
    }
}
export default connect(
    state => (
        {
            activeCount: state.todos.filter(item => !item.completed).length,
            completedCount: state.todos.filter(item => item.completed).length,
            filter:state.filter

        }

    ),
    {
        deleteAll: () => ({type: 'DELETE_ALL'}),
        changeFilter:filter=>({type:'CHANGE_FILTER',filter})  //这里的是一个action
    }
)(TodoFooter)