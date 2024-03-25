/*


function functionName(){

}


*/ 


// basic function

// function printName(name){
//     console.log(`my name is ${name}`);
// }

// printName('anik');
// printName('ritu');


// -------------------------------

// function printDetails(name, age, address){
//     console.log(`my name is ${name}. my age is ${age}. my address ${address}`);
// }

// printDetails('anik', 24, 'Dhaka')


// --------------------------------------


// function add(x, y){
//     const total = x + y;
//     return total;
// }

// const ans = add(5, 7);
// console.log(ans);


// ------------------------------------------

function giveNumber(){
    console.log('inside function: ',5);
    return 5;
}

const x = giveNumber();
console.log('outside function: ', x);