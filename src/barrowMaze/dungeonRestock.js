import {rollDie} from "@/utilities";

const bm_table7 = [
    "Monster",
    "Monster and treasure.",
    "Empty",
    "Empty",
    "Empty",
    "Empty"
];

export function generateRestock(){
    let dr = rollDie(1, 6),
        part1 = bm_table7[dr-1];

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
function concealedTreasure() {
    return rollDie(1,6) <= 1;
}
