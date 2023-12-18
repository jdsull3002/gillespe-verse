import { rollDie} from "@/utilities";

const bm_table4= [
    "Empty",
    "Empty",
    "Empty",
    "Spiked",
    "Spiked",
    "Sloped",
    "Monster",
    "Bottomless"
];

export function generatePitContents(){
    let part1 =  bm_table4[rollDie(1, 8) -1];
    switch(part1){
        case "Empty":
            part1 = part1 + ". Take " + fallDamage() + " points falling damage.";
            break;
        case "Spiked":
            part1 = part1 + ". Take " + fallDamage() + " points falling damage. Save versus Poison.";
            break;
        case "Sloped":
            part1 = part1 + ' the trap door closes behind you as you slide.'
            break;
        case "Monster":
            break;
        case "Bottomless":
            break;
        default:
            break;
    }

    return part1;
}

function fallDamage(){
  return rollDie(1, 6);
}
