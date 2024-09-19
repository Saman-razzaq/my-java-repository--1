// avoid this type of comparisons
console.log(2>1);
console.log("2">1);
console.log(null >0);
console.log(null ==0);
console.log(null >= 0);// comparitively null convert into value zero thats why it gives answer true 
console.log(undefined=0); // undefined compare with any comparison =,<,> it give answer 0

// strict check ===
// it check value and its data types also 
console.log("4" === 4); // it tells that the first number is string data type and another is number and the both are not equal thats why it give false
console.log("4" === "4"); // same datatype its true