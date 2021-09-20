const first_file = require('./home_folder/first');
const second_file = require('./home_folder/second');

first_file.userId('abc123');
second_file.nameGreeter('ABC123');

console.log("************************************************");

const index_var = require('./home_folder');

// Case 1
console.log(index_var);
// index_var.a.userId('xyz123');
// index_var.b.secondGreeter('XYZ456');

console.log("************************************************");

// Case 2
index_var.userId('xyz123');
index_var.secondGreeter('XYZ456');

console.log("************************************************");

// Case 3
const {userId, nameGreeter} = require('./home_folder');

userId('abc123');
nameGreeter('ABC456');