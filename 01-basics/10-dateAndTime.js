let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


//====================time==================

let myTimeStemp = Date.now()
//console.log (myTimeStemp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
//console.log(newDate.getHours());