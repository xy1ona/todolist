import React,{Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test'
import './style.css';

class Todolist extends Component{
    constructor(props){
        //当组件的state或者props发生改变的时候， render函数就会重新执行
        super(props);
        this.state = {
            inputValue:'',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick= this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componteWillMount')
    }

    render(){
        console.log('parent render')
        return(
            <Fragment>
                {
                    /*注释*/
                    //dangerouslySetInnerHTML 不被转义
                    //className代替class
                    //label htmlFor代替for
                }
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input=input}}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
                <Test
                    content={this.state.inputValue}
                />
            </Fragment>
        )
    }

    //组件被挂载到页面之后，自动被执行
    componentDidMount(){
        console.log('componentDidMount')
    }

    //组件被更新之前， 他会自动被执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    //组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行
    //shouldComponentUpdate返回true它才执行
    //shouldComponentUpdate返回false，这个函数不会被执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    //组件更新完成之后，他会执行
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    getTodoItem() {
       return this.state.list.map((item, index)=>{
            return(
                <div key={index}>
                    {/*父子组件传值，传方法*/}
                    <TodoItem
                        content={item}
                        index={index}
                        handleItemDelete = {this.handleItemDelete}
                    />
                    {/*
                        <li key={index}
                            onClick={this.handleItemDelete.bind(this, index)}
                            dangerouslySetInnerHTML={{__html: item}}
                        >
                        </li>
                     */}
                </div>
            )
        })
    }

    handleInputChange(e) {
        ///const value = e.target.value;
        const value = this.input.value;
        this.setState(()=>({
              inputValue:value
        }))
        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    handleButtonClick(){
        //setState异步函数
        this.setState((prevState)=>({
            list: [...prevState.list,prevState.inputValue],
            inputValue:''
        }), ()=>{
            //页面更新之后获取dom
            console.log(this.ul.querySelectorAll('div').length)
        })
        // this.setState({
        //    list: [...this.state.list,this.state.inputValue],
        //    inputValue:''
        // })
    }
    handleItemDelete(index){
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list }
        })
        // this.setState({
        //     list:  list,
        // })
    }
}

export default Todolist;
