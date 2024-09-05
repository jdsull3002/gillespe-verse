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
            size: gemSizeEnum.verySmall
        }
    } else if (dr < 9) {
        return {
            baseValue: 50,
            description: SemiPreciousStones[rollDice(1, 13, -1).total],
            size: gemSizeEnum.small
        }
    } else if (dr < 15) {
        return {
            baseValue: 100,
            description: PreciousStones[rollDice(1, 11, -1).total],
            size: gemSizeEnum.average
        }
    } else if (dr < 19) {
        return {
            baseValue: 500,
            description: FancyStones[rollDice(1, 6, -1).total],
            size: gemSizeEnum.large
        }
    } else if (dr <= 20) {
        return {
            baseValue: 1000,
            description: GemStones[rollDie(1, 6, -1)],
            size: gemSizeEnum.verySmall
        }
    }
}


