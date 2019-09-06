// import React from 'react'
// import firebase from './firebase';

function setNewMessage(category){
    let newMessage = '';
    if(category === 'Garbage'){
      newMessage = 'the item is garbage'
    } 
    else if(category === 'Blue Bin') {
      newMessage = 'the item goes in your blue bin'
    } else if(category === 'HHW'){
      newMessage = 'the item is household hazardous waste'
    } else if (category === 'Not Accepted'){
      newMessage = 'the item cannot be recycled at home or any other facility'
    } else if (category === 'Metal Items'){
      newMessage = 'the item must be dropped off at a metal recycling facility'
    }

    return newMessage

    // this.setState({
    //   message:newMessage
    // })
    // console.log('checkRecMethod was run and the object passed to it is"',this.state.fullObject[0][1].keywords);
}

export default setNewMessage
