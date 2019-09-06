import React, {Component} from 'react';
import firebase from './firebase';
// import possibleCats from './Search'
import setNewMessage from './SetNewMessage'
import './App.scss';
//to refactor into components:
//1. within the render of the main App, decide which elements are simply rendering something to the page and which are actually running functions.  The ones running functions are the ones that could be broken out into child components.
//2.  if a child component needs to trigger a change in parent's state, put the function that changes the state in the PARENT and pass it to the child as a prop.  The child component will trigger the PARENT to run the function with an argument that the child supplies, and the PARENT will then be able to update its own state because it's the one running the function.  
// Say the component is called SearchBar.  In your App's render you would have <Searchbar handleClick={this.handleClick}/> and as part of the component Searchbar's render you would have, say <button onClick={this.props.handleClick(this.state.someKey)}></button> This will call the function handleClick IN THE PARENT, using this.state.someKey (this refers to the CHILD component's state!) passed in as an argument.  
//See this reference on stack overflow: https://stackoverflow.com/questions/48407785/react-pass-function-to-child-component
//Note that when we write <Searchbar handleClick={this.handleClick}/> we are passing the function via props to the entire component.  The handleClick function can then be called from anywhere in the Searchbar component.




class App extends Component {
  constructor(){
    super()

    this.state = {
      userChoice: '',
      message: '',
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
        fullObject: [response]
      })
      // console.log(this.state.fullObject);
    }) 
  } 

  

  handleChange = (event) => {
    this.setState({
      userChoice: event.target.value,
      // message: ''
    })
  }
  
  // cleanMessage = (mes) => {  
  //   const cleanMessage = mes.replace(/[&|;]+[a-z0-9]+[&|;]/g, "");
  //   return cleanMessage;
  // }

  handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.userChoice === ''){
        this.setState({
          message: 'Please select an item from the list first'
        })
      } else {
        this.checkRecMethod()
      }
     
      //run the function on this.state.userChoice;
      //take the value(option) you were passed and check to see which object's 'keyword' key contains it.  Store that object's category in a variable recycleCat. 
      // Run getMessage(recycleCat):
      //getMessage = if recycleCat = garbage  
    }
    
  checkCategories = () => {
    console.log('check categories is run')
    // fullObject[0].category.reduce((a,b) => {
      //   if (!a.includes(b)){
        //     a + b
        //   }
        // })
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

  checkRecMethod = () => {
    const returnedRecycleMethod = 
    this.state.fullObject[0].filter((item)=>{
      return item.keywords.includes(this.state.userChoice)
    })
    const newMessageToPrint = setNewMessage(returnedRecycleMethod[0].category)
    this.setState({
      message: newMessageToPrint
    })

    // setNewMessage(returnedRecycleMethod)
    // this.state.fullObject[0].map((item) => {
    //   console.log(item.keywords.includes(this.state.userChoice));
    // })
    // console.log(this.state.fullObject[0][2].keywords.includes(this.state.userChoice));

    console.log(returnedRecycleMethod[0].category); 
  }



  render(){
    //Me: PUT CONDITIONAL IN YOUR RENDER.  IF X RETURN (STUFF) ELSE RETURN (OTHER STUFF)

    
   
    return (
      <div className="App">
        <h1>Welcome to the recycling helper!</h1>
        <h3>This app will help you determine which items are recyclable in the Greater Toronto Area</h3>
        <h3>To begin, select the item you'd like to recycle from the list below</h3>
        {/* <h3>The userChoice is: {this.state.userChoice}</h3> */}
        {/* <h3>The message is: {this.cleanMessage(this.state.message)}</h3> */}
        <form action="">
          <label htmlFor="selectItem">I want to recycle:  </label>
          <select name="wasteItem" id="selectItem" value={this.state.value} onChange={this.handleChange}>
            {/* when user changes value of the select field, run handleChange function which sets state.userChoice to select's value */}
            <option value="metal lids">metal lids</option>
            <option value="black plastic">black plastic</option>
            <option value="glass bottle">glass bottle</option>
          </select>
          
          <button onClick={this.handleSubmit}>Check if it's recyclable!</button>
        </form>
        <p className="message">{this.state.message}</p>
      </div>
    )
  }
}     



export default App;
