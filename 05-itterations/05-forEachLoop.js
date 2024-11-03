const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
 } )
// for each loop using arrow function
 coding.forEach( (item) => {
     console.log(item);
 } )

 function printMe(item){
//     console.log(item);
 }


// we can also print item ,index of item and arry 
 coding.forEach(printMe)

 coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
 } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName);
} )