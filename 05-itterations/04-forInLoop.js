// for in loop for objects 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"

}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for arrays 

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// for in loop in map 

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
    console.log(key);
 } // kuch bhi print nai ho ga q k maps itteratable nai hoty in py for in or out kam nai krta 