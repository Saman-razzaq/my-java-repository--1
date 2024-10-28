// ye = jo h wo assignment operator h 

// === strict equal which check type od data also
// <, >, <=, >=, ==, !=, ===, !==
 
// concept of if and if else
const temperature = 41

 if ( temperature === 41 ){
     console.log("less than 50");
 } else {
     console.log("temperature is greater than 50");
 }

 console.log("Execute"); // ye hmaisha execute ho ga q k ye if condition sy bahir h 

 const score = 200

 if (score > 100) {
     let power = "fly" // let and const mn scope ander tak hi rehta h but jaisy hi hum isko var sst krain gy to ye bahir wala b sab execute krwa dy ga jo k galat method h 
     console.log(`User power: ${power}`);
 }

 //console.log(`User power: ${power}`);// error ay ga  power is not defined because hum ny power ka scope ander tak set kia h 
 
// short hand notation 

// implicit scope jo 1 hi line mn execute hota h 

const balance = 1000

 if (balance > 500) console.log("test");// hum 1 sy zyda b likh skty hn by using comma  but its not good 
  // nesting // for multiple things

  if (balance < 500) {
        // console.log("less than 500");
     } else if (balance < 750) {
        // console.log("less than 750");
        
     } else if (balance < 900) {
       //  console.log("less than 750");
        
     } else {
      // console.log("less than 1200");
     }


     //interesting case 

     const userLoggedIn = true
     const debitCard = true
     const loggedInFromGoogle = false
     const loggedInFromEmail = true
     

if (userLoggedIn && debitCard ) // this is for and statement that userloggedIn bhi true ho or debitcard bhi true ho 
     {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) // this is for "or" statement that loggesInFromGoogle or LoggedInFromEmail both are optional
     {
    console.log("User logged in");
}