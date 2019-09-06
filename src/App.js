import React, {Component} from 'react';
import firebase from './firebase';
// import possibleCats from './Search'
import './App.scss';




class App extends Component {
  constructor(){
    super()

    this.state = {
      userChoice: '',
      message: '',
      keywords: []
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
      userChoice: event.target.value
    })
  }
  
  cleanMessage = (mes) => {  
    const cleanMessage = mes.replace(/[&|;]+[a-z0-9]+[&|;]/g, "");
    return cleanMessage;
  }

  handleSubmit = (e) => {
      e.preventDefault();
      //if this.state.userChoice === '', return some error message.
      // if (this.state.message === ''){
        console.log('submit was clicked');
      // }
      // console.log(e);
      //run the function on this.state.userChoice;
      //take the value(option) you were passed and check to see which object's 'keyword' key contains it.  Store that object's category in a variable recycleCat. 
      // Run getMessage(recycleCat):
      //getMessage = if recycleCat = garbage  
  }

  render(){
    //Me: PUT CONDITIONAL IN YOUR RENDER.  IF X RETURN (STUFF) ELSE RETURN (OTHER STUFF)

    
    if (this.state.userChoice === ''){
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
                <option value="cardboard">cardboard</option>
                <option value="black plastic">black plastic</option>
                <option value="glass bottle">glass bottle</option>
              </select>
              
              <button onClick={this.handleSubmit}>Check if it's recyclable!</button>
            </form>
            {/* <h2>{textTest}</h2> */}
            {/* <ul>
              {this.state.books.map((book, i) => {
                return (
                <li key={i}>
                  <p>{book.title}</p>
                  <button onClick= {() =>{this.removeBook(i)}}>Remove book</button>
                </li>

                );
              })}
            </ul> */}
        </div>
  );} else {
    return(
      <h1>The selction is not empty!</h1>
    )
        
  }
}

}     

			// new empty array that will be used to update our books state
			// an array is important here because our intial state of "books" is an empty array
			// array data is easy to map over
// 			const newState = [];

// 			// loop over our response variable that is an object of firebase data
// 			// for every property (or key) in our object push both the book title and the firebase-
//       // generated key as values in an object to the newState array
//       //Me: this is grabbing the data from Firebase and updating our state.  This runs as soon as the page loads.
			
// 			newState.push({
//           category: response[category],
//           uniqueKey: key
// 				});
// 			}

// 			// update state with the newState array
// 			this.setState({
// 				books: newState,
// 			});
// 		});
// 	}

//     // custom function to update state
//     //Me: we are defining all the functions that we'll use in the app, but are not calling them.  The button clicks are what call the functions.
    
// 	handleChange = event => {
// 		// the event object gives us access to the html element (target) that was changed
//         // and returns us the value of the html element
//         //Me: this is not running yet.  This is just the creation of the function that will be called WHEN the user clicks on a button (button click will call handleChange)
// 		this.setState({
// 			userInput: event.target.value,
// 		});
// 	};

// 	// custom functiom to add new item to firebase and update state
// 	handleSubmit = event => {
// 		event.preventDefault();

// 		const dbRef = firebase.database().ref();

// 		// firebase .push() method lets us pice whatever value is stored in state at the time
// 		// the handleSubmit method is fired
// 		dbRef.push(this.state.userInput);

// 		// reset our input field back to empty
// 		this.setState({
// 			userInput: "",
// 		});
// 	};

// 	// custom function to remove an item from firebase
// 	// this function takes an argument, which is the ID of the book we want to remove
// 	removeBook = bookId => {
// 		const dbRef = firebase.database().ref();

// 		// using the Firebase methods .child(). & remove(), we remove the node specific to the book ID
// 		dbRef.child(bookId).remove();
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>Bookshelf App!</h1>

// 				<form action="">
// 					<input
// 						type="text"
// 						name="userInput"
// 						// The onchange event occurs when the value of an element has been changed
// 						onChange={this.handleChange}
// 						// binding or controlling inputs requires us to make sure react state is being tracked everywhere
// 						value={this.state.userInput}
// 					/>
// 					<button onClick={this.handleSubmit}>Add New Book</button>
// 				</form>
// 				<ul>
// 					{this.state.books.map(book => {
// 						return (
// 							<li>
// 								<p>{book.title}</p>
// 								{/* we are passing a reference to a function rather than calling a function. This way,
//                 the function won't fire immediately and delete all our books */}
// 								<button onClick={() => this.removeBook(book.uniqueKey)}>
// 									Remove Book
// 								</button>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

export default App;
