// import React from 'react'
// import firebase from './firebase';
import trashCan from './assets/trashCan.png'

function setNewMessage(category){
  console.log(category)
    // const newMessage = {
    //   message: '',
    //   image: '',
    //   alt:''
    // };

    const garbageIndex = {
      Garbage:{
        message1: 'Place item in your household garbage.',
        image: trashCan,
        alt: 'An image of a trashcan.'
      },
      
      Oversize:{
        message1: 'Items that would never fit in your Garbage Bin, when empty, are considered oversize and collected curbside.', 
        message2: 'Please place this item 0.5 metre (2 feet) away from your Garbage Bin on your scheduled garbage collection day for free pick-up.',
        image: trashCan,
        alt: 'An image of a trashcan.'
      },

      GreenBin:{
        message1: 'Place item in your green bin.',
        image: trashCan,
        alt: 'An image of a trashcan.'
      },


    }
    console.log(garbageIndex.garbage)

    const finalItem = garbageIndex[category.replace(/\s/g,'')];
    console.log(finalItem)

    return finalItem

//     if(category === 'Garbage'){
//       newMessage.message = "This item is Garbage, bubba!"
//       newMessage.image = trashCan
//       newMessage.alt = 'An image of a trash can.'
//     } 
//     else if(category === 'Blue Bin') {
//       newMessage.message = 'the item goes in your blue bin'
//     } else if(category === 'HHW'){
//       newMessage.message = "<ul><li>This item is Household Hazardous Waste (HHW) and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.</li>Please take this item to one of the City's Drop-Off Depots or Community Environment Days.</li></ul>"
//     } else if (category === 'Not Accepted'){
//       newMessage.message = 'the item cannot be recycled at home or any other facility'
//     } else if (category === 'Metal Items'){
//       newMessage.message = 'the item must be dropped off at a metal recycling facility'
//     } else if

//     return newMessage
//     // return image

//     // this.setState({
//     //   message:newMessage
//     // })
//     // console.log('checkRecMethod was run and the object passed to it is"',this.state.fullObject[0][1].keywords);
}

export default setNewMessage
