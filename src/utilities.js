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
