//const darazUser = new Object() // singleton object
const darazUser = {} // non singleton object 
// both give empty values
darazUser .Id = "123xxhs"
darazUser.Name = "hgysgy"
darazUser.email="abc@gmail.com"
darazUser.isLoggedIn= false
console.log(darazUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abc",
            lastname: "xyz"
        }
    }
}

 console.log(regularUser.fullname);

 // to combine any object 

 
const obj1 = {1: "a", 2: "b"}// key numers liye hum ny or values ko string lia 
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 } this is not good it creat problem jus like arry 
// assigning 
 //const obj3 = Object.assign({}, obj1, obj2, obj4) // we use this synax instead of ....with {} it act like target and other all obk=ject are source 

 // we also use spread operator which we use in arry 
 const obj3 = {...obj1, ...obj2} ///// spread operator  it combine everything 

  // console.log(obj3);

   /// database objects are in the form of arry of objects 
