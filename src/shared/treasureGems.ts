import {rollDice, rollDie} from "./utilities";

import {OrnamentalStones} from "../types/ornamentalStones";
import {gemSizeEnum, GemTreasure} from "../types/gemEnums";
import {SemiPreciousStones} from "../types/semiPrecious";
import {FancyStones, PreciousStones} from "../types/fancyStones";
import {GemStones} from "../types/gemStones";

export function gemInTreasure(): GemTreasure {
    const dr = rollDice(1, 19).total;
    if (dr < 5) {
        return {
            baseValue: 10,
            description: OrnamentalStones[rollDice(1, 12, -1).total],
            size: gemString(rollDie(1, 3, 3))
        }
    } else if (dr < 9) {
        return {
            baseValue: 50,
            description: SemiPreciousStones[rollDice(1, 13, -1).total],
            size: gemString(rollDie(1, 3, 3))
        }
    } else if (dr < 15) {
        return {
            baseValue: 100,
            description: PreciousStones[rollDice(1, 11, -1).total],
            size: gemString(rollDie(1, 3, 2))
        }
    } else if (dr < 19) {
        return {
            baseValue: 500,
            description: FancyStones[rollDice(1, 6, -1).total],
            size: gemString(rollDie(1, 3, 1))
        }
    } else if (dr <= 20) {
        return {
            baseValue: 1000,
            description: GemStones[rollDie(1, 6, -1)],
            size: gemString(rollDie(1, 3))
        }
    }
}

function gemString(num: number): gemSizeEnum {
    let response;
    switch (num) {
        case 1:
            response = gemSizeEnum.verySmall;
            break;
        case 2:
            response = gemSizeEnum.small;
            break;
        case 3:
            response = gemSizeEnum.average;
            break;
        case 4:
            response = gemSizeEnum.large;
            break;
        case 5:
            response = gemSizeEnum.veryLarge;
            break;
        case 6:
            response = gemSizeEnum.huge;
            break;
        default:
            break;
    }
    return response;
}


