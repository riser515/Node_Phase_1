const fs = require('fs');
console.log(fs);
console.log("***********************************************");
const dirSync = fs.readdirSync('./');
console.log(dirSync);
console.log("***********************************************");
const dirSync2 = fs.readdirSync('../');
console.log(dirSync2);
// console.log("***********************************************");
// const dirSync3 = fs.readdirSync('.../');     // Erroneous
// console.log(dirSync3);
console.log("***********************************************");
const dirAsync = fs.readdir('./', function(err, files){
    if(err) console.log("Error encountered: ", err);
    else console.log("Files found: ", files);
})
// console.log(dirAsync);       // This statement shouldn't be mentioned as readdir() would directly produce output, 
// once encountered. This can be compared with the characteristic of print() function of any language.
console.log("***********************************************");     // This statement isn't getting interpreted!! Why???
fs.readdir('./', function(err, files){
    if(err) console.log("Error encountered 2: ", err);
    else console.log("Files found 2: ", files);
})      // This is done to prevent unusable assigment operation, as dirAsync variable is never needed to be used in the above case.
console.log("***********************************************");
const dirAsync2 = fs.readdir('./', function(err, files){
    if(err) return "Error encountered 3: ", err;
    else return "Files found 3: ", files;
})
console.log(dirAsync2);     // Gives just undefined as output! Why???
console.log("***********************************************");