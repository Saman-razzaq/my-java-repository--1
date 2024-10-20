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