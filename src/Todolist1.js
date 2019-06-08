import React, {Component} from 'react'
import 'antd/dist/antd.css';
import store from './store'
import {getInputChangeAction,getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodlistUI from './TodoListUI'

class Todolist1 extends Component{

    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
        //订阅state变化
        store.subscribe(this.handleStoreChange)
        console.log(this.state)
    }

    render(){
        return (
            <TodlistUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
               handleItemDelete={this.handleItemDelete}
            />
        )
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}
export default Todolist1
