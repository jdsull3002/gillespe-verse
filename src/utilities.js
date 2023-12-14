export function rollDice(number, sides, modifier = 0){
    let count = 0,
        sum = 0,
        series = [];
    do {
        const roll =  Math.floor((Math.random() * sides) + 1);
        series[count] = roll;
        sum = sum + roll;
        count = count + 1;
    } while (count < number)

    const response = {
        dice: series,
        total: sum + modifier
    }
    return response;
}

export function rollDie(number, sides, modifier= 0){
    return Math.floor((Math.random() * sides) + 1);
}


export function rollAdvantage(){
    return Array.max(rollDice(2, 20).dice);
}
export function rollDisadvantage(){
    return Array.min(rollDice(2, 20).dice);
}
