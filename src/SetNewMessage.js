// import React from 'react'
// import firebase from './firebase';
import trashCan from './assets/trashCan.png'

function setNewMessage(category){
    const newMessage = {
      message: '',
      image: '',
      alt:''
    };
    if(category === 'Garbage'){
      newMessage.message = "This item is Household Hazardous Waste (HHW) and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.</li>Please take this item to one of the City's Drop-Off Depots or Community Environment Days."
      newMessage.image = {trashCan}
      newMessage.alt = 'An image of a trash can.'
    } 
    else if(category === 'Blue Bin') {
      newMessage.message = 'the item goes in your blue bin'
    } else if(category === 'HHW'){
      newMessage.message = "<ul><li>This item is Household Hazardous Waste (HHW) and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.</li>Please take this item to one of the City's Drop-Off Depots or Community Environment Days.</li></ul>"
    } else if (category === 'Not Accepted'){
      newMessage.message = 'the item cannot be recycled at home or any other facility'
    } else if (category === 'Metal Items'){
      newMessage.message = 'the item must be dropped off at a metal recycling facility'
    }

    return newMessage
    // return image

    // this.setState({
    //   message:newMessage
    // })
    // console.log('checkRecMethod was run and the object passed to it is"',this.state.fullObject[0][1].keywords);
}

export default setNewMessage
