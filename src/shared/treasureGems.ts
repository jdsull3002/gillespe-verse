import {rollDice, rollDie} from "./utilities";

import {OrnamentalStones} from "../types/ornamentalStones";
import {gemSize, GemTreasure, gemValueMultiplier} from "../types/gemEnums";
import {SemiPreciousStones} from "../types/semiPrecious";
import {FancyStones, PreciousStones} from "../types/fancyStones";
import {GemStones} from "../types/gemStones";

export function gemInTreasure(): GemTreasure {
    const dr = rollDice(1, 19).total;
    if (dr < 5) {
        const sz = gemString(rollDie( 3, 3)),
        desc = OrnamentalStones[rollDice(1, 12, -1).total];

        return {
            derivedValue: Math.ceil(gemValueMultiplier[sz] * desc.value),
            description: desc,
            size: sz
        }
    } else if (dr < 9) {
        const sz = gemString(rollDie( 3, 3)),
            desc=SemiPreciousStones[rollDice(1, 13, -1).total];

        return {
            derivedValue: gemValueMultiplier[sz] * desc.value,
            description: desc,
            size: sz
        }
    } else if (dr < 15) {
        const sz = gemString(rollDie( 3, 2)),
            desc= PreciousStones[rollDice(1, 11, -1).total];

        return {
            derivedValue: gemValueMultiplier[sz] * desc.value,
            description: desc,
            size: sz
        }
    } else if (dr < 19) {
        const sz =gemString(rollDie( 3, 1)),
            desc= FancyStones[rollDice(1, 6, -1).total];

        return {
            derivedValue: gemValueMultiplier[sz] * desc.value,
            description: desc,
            size: sz
        }
    } else if (dr <= 20) {
        const sz = gemString(rollDie( 3)),
            desc= GemStones[rollDie( 6, -1)];


        return {
            derivedValue: gemValueMultiplier[sz] * desc.value,
            description: desc,
            size: sz
        }
    }
    return;
}

function gemString(num: number): gemSize {
    let response;
    switch (num) {
        case 1:
            response = 'verySmall';
            break;
        case 2:
            response = 'small';
            break;
        case 3:
            response = 'average';
            break;
        case 4:
            response = 'large';
            break;
        case 5:
            response = 'veryLarge';
            break;
        case 6:
            response = 'huge';
            break;
        default:
            break;
    }
    return response;
}


