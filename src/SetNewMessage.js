// import React from 'react'
// import firebase from './firebase';

function setNewMessage(category){
    const newMessage = {
      message: '',
      image: ''
    };
    if(category === 'Garbage'){
      newMessage.message = 'the item is garbage'
      newMessage.image = 'trashCan.png'
    } 
    else if(category === 'Blue Bin') {
      newMessage.message = 'the item goes in your blue bin'
    } else if(category === 'HHW'){
      newMessage.message = 'the item is household hazardous waste'
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
