function greet(name){
    console.log(`Hello ${name}!`);
}

// console.log(`Hello JS \n`, module);
module.exports = greet;
console.log(`Hello JS \n`, module);
console.log(`Hello JS \n`, module.exports);

/* Internally, a function call takes place that carries the function as an export. This called function
is known as 'Module Wrapper Function'. It's basic structure can be established as:

(function(exports, require, module, __filename, __dirname){
    // Module code actually lives in here
});
*/

/* Following the above approach, one can conclude the backend scenario as:-
(function(exports, require, module, __filename, __dirname){
    function greet(name){
    console.log(`Hello ${name}!`);
    }
});
*/

console.log(__filename);
console.log(__dirname);