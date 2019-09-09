import React, {Component} from 'react'
// import trashCan from './assets/trashCan.png'
import setNewMessage from './SetNewMessage'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            userChoice: '',
            message1: '',
            message2: '',
            image: '',
            alt:''
        }
    }

    //runs checkMethod if userChoice isn't null
    handleSubmit = (userChoice) => {
    // e.preventDefault();
        // console.log('userChoice is:',userChoice)
        this.checkRecMethod(userChoice)

    }
   
    //run the function on this.state.userChoice;
    //take the value(option) you were passed and check to see which object's 'keyword' key contains it.  Store that object's category in a variable recycleCat. 
    // Run getMessage(recycleCat):
    //getMessage = if recycleCat = garbage  

  
    checkCategories = () => {
    console.log('check categories is run')
    // fullObject[0].category.reduce((a,b) => {
        //   if (!a.includes(b)){
        //     a + b
        //   }
        // })
    }

    resetMessage = () => {
    this.setState({
        message1: ''
    })
    }
    
    checkRecMethod = (userChoice) => {
        console.log('userChoice in checkRecMethod is:',userChoice)
        const returnedRecycleMethod = 
        this.props.fullObject.filter((garbageItem)=>{
          return garbageItem.keywords.includes(userChoice)
        })
        console.log(returnedRecycleMethod)
        //runs setNewMessage to determine which message to print based on the value of the returned item's 'category' key.  Stores this in variable newMessageToPrint
        const newMessageToPrint = setNewMessage(returnedRecycleMethod[0].category)
        console.log(returnedRecycleMethod[0].category)
        //sets state.message to newMessageToPrint
        this.setState({
          message1: newMessageToPrint.message1,
          message2: newMessageToPrint.message2,
          image: newMessageToPrint.image,
          alt: newMessageToPrint.alt
        })
    
        // setNewMessage(returnedRecycleMethod)
        // this.state.fullObject[0].map((item) => {
        //   console.log(item.keywords.includes(this.state.userChoice));
        // })
        // console.log(this.state.fullObject[0][2].keywords.includes(this.state.userChoice));
    
        console.log(returnedRecycleMethod.category); 
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
                <img src="" alt=""/>
                <label htmlFor="selectItem">I want to recycle:  </label>
                <select name="wasteItem" id="selectItem" value={this.state.value} onChange={
                    this.handleChange}>
                    {/* when user changes value of the select field, run handleChange function which sets state.userChoice to select's value */}
                    <option value="metal lids">metal lids</option>
                    <option value="black plastic">black plastic</option>
                    <option value="gift wrapping paper">gift wrapping paper</option>
                    <option value="paper takeout container">paper takeout container</option>
                    <option value="food scraps">food scraps</option>
                    <option value="nail polish">nail polish</option>
                </select>
                
                <button onClick={(e)=>{
                e.preventDefault(e) 
                    
                    if (this.state.userChoice === ''){

                        this.setState({
                        message1: 'Please select an item from the list first'
                        })
                        } 
                        else 
                        {
                        this.handleSubmit(this.state.userChoice)}
                    }}>Check if it's recyclable!
                 </button>
                 <p>{this.state.message1}</p>
                 <p>{this.state.message2}</p>
                <img src={this.state.image} alt={this.state.alt}/>
            </form>
        )
    }
}    

export default Form;
