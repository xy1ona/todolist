import React ,{Component} from 'react'
import { connect } from 'react-redux'

class Todolist2 extends Component{
    render() {

        const { inputValue,list, changeInputValue, handleBtnClick, handleDelete} = this.props;

        return (
            <div>
                <div>
                    <input type="text"
                           value={inputValue}
                           onChange={changeInputValue}
                    />
                    <button onClick={handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index)=>{
                            return(
                                <li
                                    key={index}
                                    onClick={() => handleDelete(index)}
                                >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        },

        handleBtnClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },

        handleDelete(index){
            const action = {
                type: 'delete_item',
                index,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist2);
