let user = process.argv[2];
console.log(user);

// Enter a third argument in terminal and it will get printed. 
// Example: node 4_process.js Khushi  ==> Output: Khushi

console.log(process.argv);
// Observe the new argv element at the end, which got included due to the introduction of third argument(here, Khushi).