//var c = 300
let a = 300
if (true) { // this curly braces are actually scope it is also used in function 
    let a = 10
    const b = 20
    //var c = 30
     console.log("INNER: ", a);
    
}
// zyada tar var ko ignore kia jata h  const and let ko use kia jata h 


console.log(a);

 //console.log(b);
 //console.log(c);
