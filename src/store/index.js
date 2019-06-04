import {createStore} from 'redux';
import reducer from './reducer'

//store是唯一的
//只有store能改变自己的内容
//reducer必须是纯函数
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default  store;
