import React, {Component} from 'react';
import firebase from './firebase';

import Form from './Form'
// import removeDups from './removeDups'
import './App.scss';





class App extends Component {
  constructor(){
    super()

    this.state = {
      userChoice: '',
      keywords: [],
      fullObject:[]
    }
  }

  // lifecycle method for when the component is finshed mounting
	componentDidMount() {
		// store a reference to our firebase database in a variable
    // console.log('The category is:',response[0].category);
    // console.log('What to do with this item',response[0].body) 
    
    
    
    const dbRef = firebase.database().ref();

		dbRef.on("value", data => {

      const response = data.val();
      //loads the full JSON array into state so it can be accessed by other functions
      this.setState({
        fullObject: response
      })
      // console.log(this.state.fullObject);
    }) 
  } 


  

  



  
 
  
  cleanMessage = (mes) => {  
    const cleanMessage = mes.replace(/[&|;]+[a-z0-9]+[&|;]/g, "");
    return cleanMessage;
  }

  
  
  getGarbage = (arr) => {
    const allGarbage = []
    arr.forEach(function(item){
      let splitItems = item.keywords.split(',')
      splitItems.forEach((item)=>{
        allGarbage.push(item)
      })
    })
    const arrayOfItemChoices = [];
    allGarbage.forEach((item) => {
      let object = {}
      object.label = item;
      arrayOfItemChoices.push(object)
    })
    return arrayOfItemChoices
    

    // return allgarbage once it's done 🤷‍♀️
  }

        
  // checkCategories();
  
  // setNewMessage = (category) => {
  //   let newMessage = '';
  //   if(category === 'Garbage'){
  //     newMessage = 'the item is garbage'
  //   } 
  //   else if(category === 'Blue Bin') {
  //     newMessage = 'the item goes in your blue bin'
  //   } else if(category === 'HHW'){
  //     newMessage = 'the item is household hazardous waste'
  //   } else if (category === 'Not Accepted'){
  //     newMessage = 'the item cannot be recycled at home or any other facility'
  //   } else if (category === 'Metal Items'){
  //     newMessage = 'the item must be dropped off at a metal recycling facility'
  //   }

  //   this.setState({
  //     message:newMessage
  //   })
  //   // console.log('checkRecMethod was run and the object passed to it is"',this.state.fullObject[0][1].keywords);
  // }

  //goes through every object in the fullObject array and returns only the item that contains the userChoice. 
  

    // setNewMessage(returnedRecycleMethod)
    // this.state.fullObject[0].map((item) => {
    //   console.log(item.keywords.includes(this.state.userChoice));
    // })
    // console.log(this.state.fullObject[0][2].keywords.includes(this.state.userChoice));


  

   //changes state.userChoice when user selects an item from drop down list
  //  handleChange = (event) => {
  //   this.setState({
  //     userChoice: event.target.value,
  //     message: ''
  //       })
  //   }

  // errorMessage = () => {
  //   this.setState({
  //     message: ''
  //   })
  // }



  render(){
    //Me: PUT CONDITIONAL IN YOUR RENDER.  IF X RETURN (STUFF) ELSE RETURN (OTHER STUFF)
    // if (this.state.fullObject) {
      console.log(this.getGarbage(this.state.fullObject));
    // }
    
  //  console.log(this.state.fullObject)
    // console.log(newAllGarbage)
   
    return (

      <div>
        {/* {this.getGarbage()} */}
        <header>
          <div className="wrapper">
            <h1>Can-I-Recycle?</h1>
            <h2>Find out what's recyclable in the GTA</h2>
            <Form fullObject={this.state.fullObject}  userChoice={this.state.userChoice} autocompleteItems={this.getGarbage(this.state.fullObject)}  />
          </div>
        </header>
        {/* <h3>The userChoice is: {this.state.userChoice}</h3> */}
        {/* <h3>The message is: {this.cleanMessage(this.state.message)}</h3> */}
        {/* <form action="">
        
          <label htmlFor="selectItem">I want to recycle:  </label>
          <select name="wasteItem" id="selectItem" value={this.state.value} onChange={this.handleChange}> */}
            {/* when user changes value of the select field, run handleChange function which sets state.userChoice to select's value */}
            {/* <option value="metal lids">metal lids</option>
            <option value="black plastic">black plastic</option>
            <option value="glass bottle">glass bottle</option>
          </select>
          
          <button onClick={this.handleSubmit}>Check if it's recyclable!</button>
        </form> */}
        {/* <section className="message"> */}
          {/* <ul><li>{this.state.message}</li></ul> */}
        {/* </section> */}
        {/* <img src={this.state.image}  */}
        {/* alt={this.state.alt} */}
        <footer>
          <p>Copyright © Seth Poulin 2019</p>
        </footer>  
      </div>
    )
  }
}
     



export default App;
