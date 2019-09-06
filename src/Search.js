import firebase from './firebase';



// const dbRef = firebase.database().ref().val();

	// 	dbRef.on("value", data => {
    //   const response = data.val();


const possibleCats = (data) => {
   const categoryArray =  data.map((item)=> {
        return item.keyword;  
    })

    console.log(categoryArray);
}



console.log('search is being seen');





export default possibleCats;