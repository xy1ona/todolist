import React, {Component, Fragment} from 'react'
import {Button, Input, List} from "antd";

//无状态组件,当一个组件只有render函数，性能最优
const TodoListUI = (props)=>{
    return(
        <Fragment>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}

                />
                <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={()=>props.handleItemDelete(index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </Fragment>
    )
}

//ui组件和容器组件
// class TodoListUI extends Component{
//     render (){
//         return (
//             <Fragment>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder='todo info'
//                         style={{width:'300px',marginRight:'10px'}}
//                         onChange={this.props.handleInputChange}
//
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (
//                             <List.Item onClick={()=>this.props.handleItemDelete(index)}>
//                                 {item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </Fragment>
//         )
//     }
// }

export default TodoListUI
