import React,{Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick= this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
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
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
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
        const value = e.target.value;
        this.setState(()=>({
              inputValue:value
        }))
        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    handleButtonClick(){
        this.setState((prevState)=>({
            list: [...prevState.list,prevState.inputValue],
            inputValue:''
        }))
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
