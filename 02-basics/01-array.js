//array//
const myArr = [77, 1, 24,83, 64, 5]
const myBooks =["eng","urdu","maths"]
console.log( myArr[4]) ;
console.log (myBooks[2]);


//methods of arry
// push,pull, pop


myBooks.push("bio")
console.log (myBooks);

// pop remove the last value of arry
myArr.pop()
console.log(myArr);

//unshift add value in arry to start point 

myArr.unshift(6)
console.log(myArr);

// shift remove the first value just like pop

myArr.shift()
console.log(myArr);

// questioning in array 

 console.log(myArr.includes(64));
 console.log(myArr.indexOf(64));
 
const newarry = myArr.join()
console.log (newarry);

//it change the type of array from object to string

console.log (typeof newarry); //type string
console.log(myArr);
// type object
console.log(typeof myArr);



