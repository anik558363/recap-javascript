

function picnicBudget(perticipents) {
    if (typeof perticipents !== 'number') {
        return 'provide me numbers'
    } else if (perticipents <= 100) {
        return 'provide me valid positive number'
    } else {
        let first100Cost = 0;
        let seconde100Cost = 0;
        let remainingCost = 0;

        if (perticipents <= 100) {
            first100Cost = 5000 * perticipents;
            return first100Cost;
        }else if(perticipents <= 200){
            first100Cost = 5000 * 100;
            seconde100Cost = (perticipents - 100) * 4000;
            totalCost = first100Cost + seconde100Cost;
            return totalCost;
        }else{
            first100Cost = 5000 * 100;
            seconde100Cost = 4000 * 100;
            remainingCost = (perticipents - 200) * 3000;
            total = first100Cost + seconde100Cost + remainingCost;
            return total;
        }
    }


}

console.log(picnicBudget(202));