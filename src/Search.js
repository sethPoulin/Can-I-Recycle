const possibleCats = data => {
  const categoryArray = data.map(item => {
    return item.keyword;
  });

  console.log(categoryArray);
};

console.log("search is being seen");

export default possibleCats;
