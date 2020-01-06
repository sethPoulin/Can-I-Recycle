//function to remove duplicates from an array
function removeDups(arr) {
  const uniqueArr = [];

  let unique = {};
  arr.forEach(function(item) {
    if (!unique[item]) {
      unique[item] = true;
    }
  });

  for (let key in unique) {
    uniqueArr.push(key);
  }
  //   return Object.keys(unique);
}

export default removeDups;
