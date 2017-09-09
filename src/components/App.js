/**
 * Created by "zhangHeng" on 2017/9/8 0008.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import store from '../store/index'


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{marginTop:'50px'}}>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <TodoHeader/>
                                </div>
                                <div className="panel-body">
                                    <TodoList/>
                                </div>
                                <div className="panel-footer">
                                    <TodoFooter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}