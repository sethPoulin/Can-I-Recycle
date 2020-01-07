import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import ResponseModal from "./ResponseModal";
import he from "he";

const Scroll = require("react-scroll");
const Element = Scroll.Element;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: "",
      message: ""
    };
  }

  //gets keywords out of the fullObject
  getKeywords = arr => arr.map(obj => obj.label);

  //removes HTML character encoding from returned message
  removeHtml = copy => {
    const div = document.createElement("div");
    div.innerHTML = copy;
    const text = div.textContent || div.innerText || "";
    return text;
  };

  getRecMethod = userChoice => {
    const garbageObject =
      //goes through the fullObject and filters out only the object whose 'keywords' key contains the userChoice
      this.props.fullObject.filter(garbageItem => {
        return garbageItem.keywords.includes(userChoice);
      });
    const recycleInstructions = he.decode(garbageObject[0].body);

    const newMessageToPrint = this.removeHtml(recycleInstructions);

    //sets state.message to newMessageToPrint's properties
    this.setState({
      message: newMessageToPrint
    });

    const Scroll = require("react-scroll");
    const scroller = Scroll.scroller;
    scroller.scrollTo("bottom", {
      smooth: "easeIn",
      duration: 700,
      offset: 200
    });
  };

  handleSubmit = userChoice => {
    //runs checkMethod if userChoice isn't null
    this.getRecMethod(userChoice);
  };
  //this functionality is specified by the autocomplete component's documentation
  handleSelect = val => {
    this.setState({
      userChoice: val
    });
  };
  //updates the userChoice and erases any existing message
  handleChange = event => {
    this.setState({
      userChoice: event.target.value,
      message: ""
    });
  };

  resetPage = () => {
    this.setState({
      userChoice: "",
      message: ""
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <h3>
            Start typing the item you'd like to recycle in the field below:
          </h3>
          <div className="formAndButton">
            <label htmlFor="selectItem">I want to recycle: </label>
            <Autocomplete
              getItemValue={item => item.label}
              items={this.props.autocompleteItems}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              renderItem={(item, isHighlighted) => (
                <div
                  className="autocomplete"
                  style={{
                    background: isHighlighted
                      ? "rgba(52, 73, 94,1.0)"
                      : "rgba(141, 148, 152,1.0)"
                  }}
                >
                  {item.label}
                </div>
              )}
              value={this.state.userChoice}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            />

            <button
              onClick={e => {
                e.preventDefault(e);
                //if the user has not made a selection
                if (this.state.userChoice === "") {
                  //return an error message
                  this.setState({
                    message: "Please enter an item first."
                  });
                } else if (
                  !this.getKeywords(this.props.autocompleteItems).includes(
                    this.state.userChoice
                  )
                ) {
                  this.setState({
                    message: "You must choose one of the items on the list."
                  });
                } else {
                  //otherwise run handleSubmit with userChoice
                  this.handleSubmit(this.state.userChoice);
                }
              }}
            >
              Check if it's recyclable!
            </button>
          </div>
        </form>
        <section className="response">
          <ResponseModal message={this.state.message} />
        </section>
        <Element name="bottom"></Element>
      </div>
    );
  }
}

export default Form;
