import {rollDice, rollDie} from "../shared/utilities";

interface encounter {
    label: string;
    action: () => string | number;
}

const bm_table1: { [key:string]: encounter[]} = {
    "level_low": [
        { label: "Froglings (2d4)", action: () => rollDice(2, 4).total },
        { label: "Rival Adventuring Party*", action: () => rivalParty() },
        { label: "Ordinary Crocodile (1d4)", action: () => rollDie(1, 4) },
        { label: "Pterodactyl (1d4+1)", action: () => rollDie(1, 4, 1) },
        { label: "Wolves (2d6)", action: () => rollDice(2, 6).total },
        { label: "Skeletons (1d8)", action: () => rollDie(1, 8) },
        { label: "Zombies (1d6)", action: () => rollDie(1, 6) },
        { label: "Frog, Giant Poisonous (2d4)", action: () => rollDice(2, 4).total },
        { label: "Insect Swarm", action: () => rollDie(1, 1) },
        { label: "Roll on levels 3–4", action: () => generateRandomEncounter('level_med') }
    ],
    "level_med": [
        {label: "Axe Beak (1d6)", action: () => rollDie(1, 6) },
        {label: "Lizardmen (2d4)", action: () => rollDice(2, 4).total},
        {label: "Neanderthals (2d4)", action: () => rollDice(2, 4).total},
        {label: "Toad, Giant (1d4)", action: () => rollDie(1, 4) },
        {label: "Leech, Giant (1d4)", action: () => rollDie(1, 4) },
        {label: "Ghouls (1d6)", action: () => rollDie(1, 6) },
        {label: "Pteranodon (1d2)", action: () => rollDie(1, 2) },
        {label: "Snake, Giant Python (1)", action: () => rollDie(1, 1) },
        {label: "Vulture, Giant (2d6)", action: () => rollDice(2, 4).total},
        {label: "Roll on levels 5–6", action: () => generateRandomEncounter('level_mid') }
    ],
    "level_mid": [
        {label: "Owlbears (1d4)", action: () => rollDie(1, 4) },
        {label: "Ape, Carnivorous (1d6)", action: () => rollDie(1, 6) },
        {label: "Ghast (1d4)", action: () => rollDie(1, 4) },
        {label: "Scorpion, Giant (1d6)", action: () => rollDie(1, 6) },
        {label: "Ants, Giant (2d6)", action: () => rollDice(2, 6).total},
        {label: "Coffer Corpses (1d6)", action: () => rollDie(1, 6) },
        {label: "Harpies (1d8)", action: () => rollDie(1, 8) },
        {label: "Wolf, Warg (1d4)", action: () => rollDie(1, 4) },
        {label: "Shambling Mound (1d3)", action: () => rollDie(1, 3) },
        {label: "Trolls (1d8)", action: () => rollDie(1, 8) }
    ],
    "level_high": [
        {label: "Large Crocodiles", action: () => rollDie(1, 3) },
        {label: "Manticores", action: () => rollDie(1, 2) },
        {label: "Giant Boar", action: () => rollDie(1, 4) },
        {label: "Mummy", action: () => rollDie(1, 4) },
        {label: "Wyvern", action: () => rollDie(1, 2) },
        {label: "Ape, Carnivorous", action: () => rollDice(2, 4).total},
        {label: "Wights", action: () => rollDie(1, 6) },
        {label: "Beetle, Giant Rhinoceros", action: () => rollDie(1, 4) },
        {label: "Triceratops", action: () => rollDie(1, 1) },
        {label: "Vampire", action: () => rollDie(1, 1) }
    ]
}

function rivalParty(): string {
    const rivalParties = [
        "Renata the Robber",
        "The Norse Whisperers",
        "The Fearsome Fivesome",
        "The Bastards of Bogtown",
        "Bertrand’s Brigands",
        "The Outriders of Uleck"
    ];

    //Note there is a 25% chance these groups may have 1d4 Level 0 Men-at-Arms in their employ.
    const mAa = (function () {
        if (rollDie(1, 100) <= 25) {
            const count = rollDie(1, 4) ;
            return 'with ' + count + ' Level 0 Men-at-Arms'
        } else {
            return '';
        }
    }());
    return  rivalParties[rollDie(1, 6) - 1] + mAa;
}

export function generateRandomEncounter(encounterLevel: string ){
    let result = bm_table1[encounterLevel][rollDie(1, 10) -1];
    let count = result.action();
    let label = result.label;
    if (count !== undefined){
        return  count + " " + label;
    }
}
