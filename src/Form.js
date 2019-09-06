import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            userChoice: ''
        }
    }

     //changes state.userChoice when user selects an item from drop down list
    handleChange = (event) => {
    this.setState({
      userChoice: event.target.value,
      // message: ''
    })
  }

    render(){

        return(
            <form action="">
            <label htmlFor="selectItem">I want to recycle:  </label>
            
            <select name="wasteItem" id="selectItem" value={this.state.value} onChange={this.handleChange}>
                {/* when user changes value of the select field, run handleChange function which sets state.userChoice to select's value */}
                <option value="metal lids">metal lids</option>
                <option value="black plastic">black plastic</option>
                <option value="glass bottle">glass bottle</option>
            </select>
            
            <button onClick={()=>{this.props.handleSubmit(this.state.userChoice)}}>Check if it's recyclable!</button>
            </form>
        )
    }
}    

export default Form;
