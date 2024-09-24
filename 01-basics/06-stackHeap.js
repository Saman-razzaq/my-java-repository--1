//primitive memory

//7 types number,string,boolean ,null undefined,symbol,bigInt


// referance (non primitive)


//3 types array ,function(),object

//const heros =[ "iqbal","shaheen" ];

//let myobject={
    //name :"saba"
   // age:22
//}
//const myFunction = function(){
    //console.log("hello world");
//}
//console.log(typeof  heros);
//__________________________________________________________________
           //memories
           //1-stack memory(primitive type)
           //2-heap memory(non primitive type )
           let myYoutubename ="abcDotcom"
           let anotherName = myYoutubename
           anotherName ="chaiorcode"
           console.log(anotherName);
          
 let userOne = {
            email:"abc@gamil.com",
            upi:" user@hsdj"

           }
 let userTwo = userOne
 userTwo.email = "saman@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 //stack mn copy or haep mn reference milta h 
