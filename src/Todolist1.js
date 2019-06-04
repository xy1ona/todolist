import React, {Component, Fragment} from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class Todolist1 extends Component{
    render(){
        return (
            <Fragment>
                <div>
                    <Input value={''} placeholder='todo info' style={{width:'300px',marginRight:'10px'}}/>
                    <Button type="primary">Primary</Button>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Todolist1
