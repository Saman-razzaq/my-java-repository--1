// when we dont know that how many paremeters pass during function like calculate many valuse we use 

// we use spread or rest operator which is ...
 // function mn multiple values pass hoti jain gi or wo sab 1 rray mn akhty ho jain gi 

 
function calculateCartPrice( ...num1){
    return num1
}

  //console.log(calculateCartPrice(200, 400, 500, 2000))


// ab pehli value hum ny cal1 ko di or dosri val2 ko baki array mn jain gi or result 500,2000 ay ga 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 //console.log(calculateCartPrice(200, 400, 500, 2000))

 
const user = {
    username: "babooo",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// another method 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
// function dalain gy jo array ko accept krta h or uski second value ko retun krta h 
function returnSecondValue(getArray){
    return getArray[0]
}

 //console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
