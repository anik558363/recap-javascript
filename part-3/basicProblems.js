const numbers = [10, 20, 44, 71];


function findLargest(numbers) {

    if (!Array.isArray(numbers)) {
        return 'provide me array'
    }
    else {
        let Largest = numbers[0];
        for (let number of numbers) {
            if(typeof number !== 'number'){
                return 'all values should be numbers'
            }
            else{
                if (number > Largest) {
                    Largest = number;
                }
            }
        }
        return Largest;
    }
}



console.log(findLargest(numbers));
// console.log(findLargest('asdf'));