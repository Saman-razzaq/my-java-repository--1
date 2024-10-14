const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// first method push

marvel_heros.push(dc_heros)
console.log(marvel_heros);
//after push array k ander arry agya is ny arry ko bhi single data assume kr lia h 
console.log(marvel_heros[3][1]);

// second method concat........ it merge all the array values together 
const allheros=marvel_heros.concat(dc_heros)
console.log(allheros);

// third and most esiest  spread operator 

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);
 // using flat to make only one array of all given arrays.....we used when we have array in array in array 

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// for checking either the value is array  or not we use "is array" it give true / false value
console.log(Array.isArray("Hitesh"))
// by converting any thing to array we use off and from 
console.log(Array.from("Hitesh"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// when it is not converted into string it give empty []let score1 = 100
console.log(Array.from({name: "hitesh"})) // interesting