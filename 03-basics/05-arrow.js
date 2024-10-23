// craete an object user 
const user ={
    username:"saman",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // ye this function k ander h jo variable contex k bary mn btata h sab
    }
}
   // user.welcomeMessage()
   // user.username = "sam"
    //user.welcomeMessage()

   // console.log(this);// is waly this ki value empty ati h jo bahir h 
    // browser k ander sab sy zyada jo globle object h wo window object h jo stand alon krta h 

//ex 1

    function chai(){
             let username = "hitesh"
             console.log(this.username);
         }
        
         //chai()// function k ander this undefined ata h

         // ex 2

         const one = function () {
                 let username = "hitesh"
                console.log(this.username);
             }
             one()


             // in arrow function "this gives epmty bracess"
             const two =  () => {
                let username = "hitesh"
                console.log(this);
            }
            two()

            // implicit return of arrow function is written as ....we use curly bracess with return keyword


           // const addTwo = (num1, num2) => {
                  //  return num1 + num2
                // }
                
                 //console.log(addTwo(5,8))


                 // explicit return mn na hi curly bracess lgty hn naw hi return keyword ata h just one line k ander pora code ajata h 

                const addTwo = (num1, num2) =>  num1 + num2
                 //or//
                 //const addTwo = (num1, num2) => ( num1 + num2 )
                 //console.log(addTwo(5,8)) // it gives the same anser too...
                
// or agr apko arrow k ander object ko return krna ho to apko prantheses b sath lagani parain gi jaisy k...

const addThree = (num1, num2) => ({username:"saman"} )
console.log(addThree())
