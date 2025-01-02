import {rollDie} from "../shared/utilities";

const bm_table7: string[] = [
    "Monster",
    "Monster and treasure.",
    "Empty",
    "Empty",
    "Empty",
    "Empty"
];

export function generateRestock(): string{
    let dr: number    = rollDie( 6),
        part1: string = bm_table7[dr-1];

    switch(dr){
        case 3: case 4: case 5: case 6:
            if(concealedTreasure()){
                part1 = "Some Concealed Treasure"
            }
        break
        default:
            break;
    }
    return part1;
}
function concealedTreasure(): boolean {
    return rollDie(6) <= 1;
}
