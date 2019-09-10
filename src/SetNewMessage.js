// import React from 'react'
// import firebase from './firebase';
import trashCan from './assets/trashCan.png'
import greenBin from './assets/greenBin.png'
import blueBin from './assets/blueBin.png'
import computer from './assets/computer.png'
import hazardousWaste from './assets/hazardousWaste.png'
import metalBlocks from './assets/metalBlocks.png'
import dresser from './assets/dresser.png'
import xmasTree from './assets/xmasTree.png'
import mapleLeaf from './assets/mapleLeaf.png'




function setNewMessage(category){
  console.log(category)
    // const newMessage = {
    //   message: '',
    //   image: '',
    //   alt:''
    // };

    const garbageIndex = {
      Garbage:{
        message1: 'This item is garbage and is not recyclable.',
        message2: 'You can put this item out with your household trash.',
        image: trashCan,
        alt: 'A cartoon image of a metal trashcan with lid halfway off.'
      },
      
      Oversize:{
        message1: 'Items that would never fit in your Garbage Bin, when empty, are considered oversize and collected curbside.', 
        message2: 'Please place this item 0.5 metre (2 feet) away from your Garbage Bin on your scheduled garbage collection day for free pick-up.',
        image: dresser,
        alt: 'A cartoon image of a chest of drawers.'
      },

      MetalItems:{
        message1: 'These metal items are now collected right at your curbside on your scheduled Garbage Bin collection day.', 
        message2: 'Please break down, bundle and/or tie if applicable. Please set out these items for pick up 0.5 metre (2 feet) away from your Garbage Bin.',
        image: metalBlocks,
        alt: 'A cartoon image of a chest of drawers.'
      },

      ChristmasTree:{
        message1: 'Remove all decorations, tinsel etc. and do not put in any type of bag.', 
        message2: 'Christmas tree collection occurs in January - refer to your collection calendar for specific dates.',
        image: xmasTree,
        alt: 'A cartoon image of a chest of drawers.'
      },
      
      NotAccepted:{
        message1: "Sorry, this item is not accepted by any of the City of Toronto's waste disposal facilities."
      },

      HHW:{
        message1: 'This item is Household Hazardous Waste (HHW) and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.',
        message2: "Please take this item to one of the City's  or Community Environment Days.",
        image: hazardousWaste,
        alt: 'A drawing of a hazardous waste symbol.'
      },

      Depot:{
        message1: 'This item is Household Hazardous Waste (HHW) and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain/toilet/sewer.',
        message2: "Please take this item to one of the City's  or Community Environment Days.",
        image: hazardousWaste,
        alt: 'A drawing of a hazardous waste symbol.'
      },

      YardWaste:{
        message1: 'Place this item in your Yard Waste.',
        message2: "Use kraft paper bags from October to March as items may freeze to containers.",
        image: mapleLeaf,
        alt: 'A drawing of a paper bag of yard waste.'
      },

      ElectronicWaste:{
        message1: 'Set out electronic equipment at curbside on scheduled Garbage collection day.',
        message2: "Large items can be put on the ground. Small items should be put in an open cardboard box or clear plastic bag.",
        image: computer,
        alt: 'A drawing of a paper bag of yard waste.'
      },

      GreenBin:{
        message1: 'Place item in your green bin.',
        image: greenBin,
        alt: 'A cartoon image of a tall green bin for organic waste recycling.'
      },

      BlueBin:{
        message1: 'This item can be placed in your Blue Bin.',
        message2: 'Rinse any bags or containers before putting them in the bin.',
        image: blueBin,
        alt: 'A cartoon image of a blue recycling bin.'
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
