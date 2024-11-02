// for of

// ["", "", ""]
// [{}, {}, {}]


// for of loop on array 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// for of loop on string

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps // jo k apny ap mn 1 object h  jo key value ko hold krta h 

const map = new Map()
map.set('IN', "India")// pehly number py key h dosry number py us ki key value h 
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // hmaisha unique value hi ati h repeat wali nai run hoti 
console.log(map);


// for of loop on map

for (const key of map) { // to ye 1 array ki form mn print ho jay ga  is ka 1 shortcut h jo k destructure of array hota h
     console.log(key);
}

//de-structure of an array

for (const [key, value] of map) {
     console.log(key, ':-', value); // ab ye key and us ki value dono print hon gi map k ander 
}


// for-of  loop on object

const myObject = { //myObject is not iterable mtlb ye itteratable nai hn for off loop objects py nai kam krta 
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
 }