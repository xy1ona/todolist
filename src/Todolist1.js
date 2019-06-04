import React, {Component, Fragment} from 'react'
import 'antd/dist/antd.css';
import { Input, Button,List } from 'antd';
import store from './store'
import {getInputChangeAction,getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class Todolist1 extends Component{

    constructor(props) {
        super(props);
        //获取state
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //订阅state变化
        store.subscribe(this.handleStoreChange)
        console.log(this.state)
    }

    render(){
        return (
            <Fragment>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo info'
                        style={{width:'300px',marginRight:'10px'}}
                        onChange={this.handleInputChange}

                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Primary</Button>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </Fragment>
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
