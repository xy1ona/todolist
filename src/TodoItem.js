import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        console.log('child render')
        const { content, test } = this.props;
        //JSX -> creatElement -> 虚拟DOM（JS 对象） -> 真实的DOM
        return (
         <div
             onClick={this.handleClick}>{test} - {content}
         </div>
        )
        /** 等价
         *   return  React.creatElement('div', {}, React.createElement('span', {}))
          */

    }
    //一个组件要从父组件接收参数
    //只要父组件的render函数被重新执行了，组件的这个生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')
    }

    //当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('child componentWillUnmount');
    }
    handleClick(){
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}

//propTypes属性，为Component的props属性进行类型检查
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

//定义默认值
TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;
