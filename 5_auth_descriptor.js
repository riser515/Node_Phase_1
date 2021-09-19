let user = process.argv[2];
let password = process.argv[3];

console.log(`Hello ${user}! Your password is ${password}.`);

// Displaying password-length number of * instead of actual password:

let hiddenpwd = '';
let hdnpwd = '';

for(let i = 0; i < password.length; i++){
    hiddenpwd += '*';
}

console.log(`Hello ${user}! Your password is ${hiddenpwd}.`);

// Displaying first and last password characters and * in place of the rest:

for(let i = 0; i < password.length; i++){
    if(i == 0 || i == password.length-1){
        hdnpwd += password[i];
    }
    else{
        hdnpwd += "*";
    }
}

console.log(`Hello ${user}! Your password is ${hdnpwd}.`);