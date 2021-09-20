function nameGreeter(name){
    console.log(`Hello ${name}`);
}

function secondGreeter(name){
    console.log(`Hi ${name}`);
}

// console.log("Second Module");

module.exports = {
    nameGreeter,
    secondGreeter
}