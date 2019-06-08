import React from 'react';
import ReactDOM from 'react-dom';
// import Todolist from './Todolist';
// import Todolist1 from './Todolist1';
import Todolist2 from './Todolist2';
import { Provider } from 'react-redux';
import store from './store2';

const App = (
    <Provider store={store}>
        <Todolist2/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

