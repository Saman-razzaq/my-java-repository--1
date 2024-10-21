// nested scope 

// scope in a function

function one(){ // one wala jo parent h wo child yani two ko acess nai kr skta jab k two wala one ko kr skta h hmaisha 
    const username = "anas"
    let Id = "456"
    const pasword= "xshgdh2415251"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(Id);
        console.log(pasword);
    }
     //console.log(website);

     two()


}
one()
//****************************interesting case************************************ */

// two techniques of functions 

// 1 // ye dono tareeqy sy work kry ga chahy hum function sy pehly likh lain ya function k bad bhi
//console.log (addone(5));
function addone (num) {
    return num+1
}
//console.log (addone(5));

//2// ye sirf tab kam kry ga jab is ko function k bad declear kia jay ga q k is mn variable  use kia gya h 
//console.log (addtw0(5));
const addtw0= function(num){
    return  num+2
}
console.log (addtw0(5));
 