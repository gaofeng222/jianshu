import React, {Component} from 'react';
import TodoItem from './todoItem'
import Test from './test'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.changeHandle = this.changeHandle.bind(this);
        this.addHandle = this.addHandle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            inputValue: '请输入要搜索的内容',
            list: ['a', 'b', 'c']
        }
    }
    //组件被挂在之前自动执行
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        //ajax全部放在这里
        axios.get('/api/test').then((res) => {
            console.log(res);
            this.setState(() => (
                {list : [...res.data]}
            ))
        }).catch((err) => {
            console.log(err)
        })
        console.log('componentDidMount')
    }
    //组件被更新之前，自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    changeHandle(e) {
        const value = e.target.value;
        //const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    addHandle() {

        this.setState((preState) => (
            {
                list: [...preState.list, preState.inputValue],
                inputValue: ''
            })
        )
    }

    handleDelete(index) {

        this.setState((prevState) => {
        const list = [...prevState.list];
        list.splice(index, 1)
            return {list}
        })
    }
    goTodoItem(){
        const {list} = this.state;
        return list.map((item, index) => {
            // return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}-{index}</li>
            return <TodoItem key={index} index={index} content={item} handleDelete={this.handleDelete} />
        })
    }
    render() {
        console.log('render')
        return (
            <div>
                <input
                    type="text"
                    style={{width: '300px'}}
                    value={this.state.inputValue}
                    onChange={this.changeHandle}
                />
                <button onClick={this.addHandle}>添加</button>
                <ul>
                    {
                        this.goTodoItem()
                    }
                </ul>
                <Test content={this.state.inputValue} />
            </div>
        )
    }
}

export default TodoList;
