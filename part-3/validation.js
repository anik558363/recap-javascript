// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return 'give me number type'
//     }
//     return x + y
// }

// console.log(add(40, "20"));


// --------------------------------------


function details(info){
    if(typeof info !== 'object'){
        return 'give object'
    }else if(!info.age || !info.name){
        return 'give me age and name property'
    }else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
        return 'name property is string type and age property is number type'
    }else if(info.age <= 0 ){
        return 'give me positive number'
    }
     return `my name is ${info.name}. my age is ${info.age}`
}



// console.log(details({name: 'anik', age: -21}));
console.log(details('fa'));