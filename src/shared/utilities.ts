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

export function rollDie(number: number,
                        sides: number,
                        modifier:number = 0): number {
    return  Math.floor((Math.random() * sides) + 1) + modifier;
}

export function rollAdvantage(): number {
    return Math.max(...rollDice(2, 20).dice);
}
export function rollDisadvantage(): number {
    return Math.min(...rollDice(2, 20).dice);
}

export function labelPluralize(label: string): string{
    const endsWithY = new RegExp(/y$/i);
    const endsWithOlf = new RegExp(/(olf)$/i);
    const endsWithMan = new RegExp(/(man)$/i);
    const endsWithCh = new RegExp(/(ch)$/i);

    if(endsWithY.test(label)){
        return label.replace('y', 'ies');
    }

    if(endsWithOlf.test(label)){
        return label.replace('olf', 'olves');
    }

    if(endsWithMan.test(label)){
        return label.replace('man', 'men');
    }

    if(endsWithCh.test(label)){
        return label.replace('ch', 'ches');
    }

    return label + 's';

}
