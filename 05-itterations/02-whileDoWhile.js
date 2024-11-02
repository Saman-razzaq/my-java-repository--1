let index = 0
 while (index <= 10) {
     console.log(`Value of index is ${index}`);
     index = index + 2
 }


 // while in array

 let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// do while loop 

let score = 1

do {
    console.log(`Score is ${score}`); // case pehly print ho ga condition bad mn check ho gi 
    score++
} while (score <= 10);