// using map with array 
//const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 //const newNums = myNumers.map( (num) => { return num + 10})
  //console.log(newNums);



  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map use with chaining ....k 2,3 methods ak sath use kr lain gy hum 
  const newNums = myNumers
  .map((num) => num * 10 )
  .map( (num) => num + 1)
  .filter( (num) => num >= 40)

  console.log(newNums);