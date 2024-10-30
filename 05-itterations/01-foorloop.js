// for

for (let i = 0; i <= 10; i++)
     {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

 //console.log(element); // element is not defined q k scope sy bahir h 


 

 for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
   // console.log(i + '*' + j + ' = ' + i*j ); //// table of 1-10
   }
    
}
 // for loop by using array 

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// break and continue keywords in loop 

 for (let index = 1; index <= 20; index++) {
     if (index == 5) {
         console.log(`Detected 5`); // jaisy hi loop mn 5 ay ga 
     break// then break ho jay ga loop just because of break
     }
    console.log(`Value of i is ${index}`);
    
 }

 for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}