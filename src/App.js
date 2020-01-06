import React, { Component } from "react";
import firebase from "./firebase";
import Form from "./Form";
import ResponseModal from "./ResponseModal";
import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userChoice: "",
      keywords: [],
      fullObject: []
    };
  }

  // lifecycle method for when the component is finshed mounting
  componentDidMount() {
    // store a reference to firebase database in a variable

    const dbRef = firebase.database().ref();

    dbRef.on("value", data => {
      const response = data.val();
      //loads the full JSON array into state so it can be accessed by other functions
      this.setState({
        fullObject: response
      });
    });
  }

  //function to return all keywords from the JSON object to populate autocomplete input in Form.js
  getGarbage = arr => {
    const allGarbage = [];
    //for each object in the array, extract its 'keywords' values, split() them so they are individual elements, and then push them into the array allGarbage
    arr.forEach(item => {
      let splitItems = item.keywords.split(",");
      splitItems.forEach(item => {
        allGarbage.push(item);
      });
    });
    //for each keyword in allGarbage, make it the value of the key 'label' in an object, and push that object to the arrayofItemChoices array.  This array will be used to generate the autocomplete input.  The autocomplete component requires the data to be formatted this way.
    const arrayOfItemChoices = [];
    allGarbage.forEach(item => {
      let object = {};
      object.label = item;
      arrayOfItemChoices.push(object);
    });
    return arrayOfItemChoices;
  };

  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <h1>Can-I-Recycle?</h1>
            <h2>Find out what's recyclable in the GTA</h2>
            <Form
              fullObject={this.state.fullObject}
              userChoice={this.state.userChoice}
              autocompleteItems={this.getGarbage(this.state.fullObject)}
            />
          </div>
        </header>
        <ResponseModal />
        <footer>
          <p>Copyright © Seth Poulin 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
