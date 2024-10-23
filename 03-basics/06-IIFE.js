// Immediately Invoked Function Expressions (IIFE)

// isko is liye use krty hn k kai dfa hum chahty hn k jaisy hi koi function likha jay wo foran sy execute ho jay 
// or dosra bara reason ye h globle pollution  sy bacha ja saky 

// alag 1 pora scope bn jata h hmara 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // first code ko end krny k liye semicolon lagana pary ga then second code likhain gy 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('saman')
