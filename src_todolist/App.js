import React, {Component, Fragment} from 'react';
import './app.css';
import 'antd/dist/antd.css';
import TodoList from './components/todoList'



class App extends Component {
    render(){
        return (
            <Fragment>
                <TodoList />
            </Fragment>
        )
    }
}

export  default  App;
