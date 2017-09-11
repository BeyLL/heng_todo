/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import React, {Component} from  'react';
import {connect} from 'react-redux';
class TodoFooter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3" style={{lineHeight: '35px'}}>
                    还有{this.props.activeCount}件待办
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-success">全部</button>
                    <button className="btn btn-default">已完成</button>
                    <button className="btn btn-default">未完成</button>
                </div>
                <div className="col-sm-3">
                    {
                        this.props.completedCount>0? <button className="btn btn-danger">清除已完成</button>:null
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
            completedCount: state.todos.filter(item => item.completed).length
        }

    )
)(TodoFooter)