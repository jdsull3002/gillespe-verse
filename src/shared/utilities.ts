export function rollDice(number: number, sides: number, modifier: number = 0): { dice: number[], total: number } {
    let count = 0,
        sum = 0,
        series = [];
    do {
        const roll =  Math.floor((Math.random() * sides) + 1);
        series[count] = roll;
        sum = sum + roll;
        count = count + 1;
    } while (count < number);

    return {
        dice: series,
        total: sum + modifier
    }
}

export function rollDie(number: number, sides: number, modifier:number = 0): number {
    return  Math.floor((Math.random() * sides) + 1);
}

export function rollAdvantage(): number {
    return Math.max(...rollDice(2, 20).dice);
}
export function rollDisadvantage(): number {
    return Math.min(...rollDice(2, 20).dice);
}
