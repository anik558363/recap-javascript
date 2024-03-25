function PandaCost(singara, samucha, jilapi) {
    if (typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number') {
        return 'provide valid integer number'
    }else if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'give me positive numbers'
    }
     else {
        const singaraPrice = 7;
        const samuchaPrice = 10;
        const jilapiPrice = 15;

        const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);

        return total;
    }
}


console.log(PandaCost(1, 1, -8));