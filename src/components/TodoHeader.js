/**
 * Created by "zhangHeng" on 2017/9/9 0009.
 */
import React,{Component} from 'react';
export default class TodoHeader extends Component{
    render(){
        return (
            <input type="text" className="form-control" placeholder="请输入您要查询的内容"/>
        )
    }
}