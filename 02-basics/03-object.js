// to declear object there are two methods 
// 1- singleton
// 2- object literals
const mySym = Symbol("key1") // declear a symbol


const JsUser = {
    name: "abc",
    "full name": "abc Choudhary",
    [mySym]: "mykey1", // symbol
    age: 18,
    location: "Jaipur",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)
console.log(JsUser["email"])
 console.log(JsUser["full name"])
 console.log(JsUser[mySym]) // correct way of symbol 

 // to change any thing in object just write 
 JsUser.email = "saman@chatgpt.com"
  
 //whenever you want to freeze any value it donot changed 
 // Object.freeze(JsUser)
  JsUser.email = "xyz@microsoft.com"
 console.log(JsUser); // it donot changed


 // to add functions in js 
JsUser.greeting = Function () 
{
    console.log("hello js user");
}


JsUser.greetingTwo = Function () 
{
    console.log("hello js user");
}
console.log (JsUser.greeting());
console.log (JsUser.greetingTwo);// it gives function return back ....function execute nai hoa h  sirf us ka reffence aya h 





JsUser.greetingThree = Function () 
{
    console.log("hello js user");
}

console.log(`Hello JS user, ${this.name}`);