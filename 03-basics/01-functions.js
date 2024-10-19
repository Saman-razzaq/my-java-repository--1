function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}
 sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
 function addTwoNumbers(number1, number2){

   // let result = number1 + number2
     //return result
    return number1 + number2
}

const result = addTwoNumbers(3, "5")
//console.log("Result: ", result);

function loginUserMessage (UserName){
   
  if(UserName===undefined){
    console.log("please enter a name");

  }

   return `${UserName} just logged in`
}
//console.log(loginUserMessage())
console.log(loginUserMessage());