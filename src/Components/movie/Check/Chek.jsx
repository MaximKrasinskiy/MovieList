import React from 'react'

class Checkbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive:false
        }
    }
    onClickHandler = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
        render(){
            const text = this.state.isActive?'On' : 'Off'
            return(
                <label>
                    <span>{text }</span>
                   <input type="checkbox" onClick={this.onClickHandler.bind(this)}/>
                </label>
            )
        }
    }
    export default Checkbox;