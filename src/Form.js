import React, {Component} from 'react'
import trashCan from './assets/trashCan.png'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            userChoice: '',
            message: ''
        }
    }

     //changes state.userChoice when user selects an item from drop down list
    handleChange = (event) => {
    this.setState({
      userChoice: event.target.value,
      message: ''
        })
    }

    render(){

        return(
            <form action="">
                <img src={trashCan} alt="test"/>
                <label htmlFor="selectItem">I want to recycle:  </label>
                <select name="wasteItem" id="selectItem" value={this.state.value} onChange={
                    this.handleChange}>
                    {/* when user changes value of the select field, run handleChange function which sets state.userChoice to select's value */}
                    <option value="metal lids">metal lids</option>
                    <option value="black plastic">black plastic</option>
                    <option value="glass bottle">glass bottle</option>
                </select>
                
                <button onClick={(e)=>{
                e.preventDefault(e) 
                    
                    if (this.state.userChoice === ''){

                        this.setState({
                        message: 'Please select an item from the list first'
                        })
                        } else {
                        this.props.handleSubmit(this.state.userChoice)}}}>Check if it's recyclable!
                        </button>
                <h2>{this.state.message}</h2>
            </form>
        )
    }
}    

export default Form;
