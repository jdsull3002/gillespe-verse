import {rollDice} from "@/utilities";

const bm_table1 = {
    level_low: [
        {
            label: "Froglings (2d4)",
            action: () => rollDice(2, 4).total
        },
        {
            label: "Rival Adventuring Party*",
            action: () => rivalParty()
        },
        {
            label: "Ordinary Crocodile (1d4)",
            action: () => rollDice(1, 4).total
        },
        {
            label: "Pterodactyl (1d4+1)",
            action: () => rollDice(1, 4, 1).total
        },
        {
            label: "Wolves (2d6)",
            action: () => rollDice(2, 6).total
        },
        {
            label: "Skeletons (1d8)",
            action: () => rollDice(1, 8).total
        },
        {
            label: "Zombies (1d6)",
            action: () => rollDice(1, 6).total
        },
        {
            label: "Frog, Giant Poisonous (2d4)",
            action: () => rollDice(2, 4).total
        },
        {
            label: "Insect Swarm",
            action: () => rollDice(1, 1).total
        },
        {
            label: "Roll on levels 3–4",
            action: () => generateRandomEncounter('level_med')
        }
    ],
    level_med: [
        {label: "Axe Beak (1d6)", action: () => rollDice(1, 6).total},
        {label: "Lizardmen (2d4)", action: () => rollDice(2, 4).total},
        {label: "Neanderthals (2d4)", action: () => rollDice(2, 4).total},
        {label: "Toad, Giant (1d4)", action: () => rollDice(1, 4).total},
        {label: "Leech, Giant (1d4)", action: () => rollDice(1, 4).total},
        {label: "Ghouls (1d6)", action: () => rollDice(1, 6).total},
        {label: "Pteranodon (1d2)", action: () => rollDice(1, 2).total},
        {label: "Snake, Giant Python (1)", action: () => rollDice(1, 1).total},
        {label: "Vulture, Giant (2d6)", action: () => rollDice(2, 4).total},
        {label: "Roll on levels 5–6", action: () => generateRandomEncounter('level_mid')}
    ],
    level_mid: [
        {label: "Owlbears (1d4)", action: () => rollDice(1, 4).total},
        {label: "Ape, Carnivorous (1d6)", action: () => rollDice(1, 6).total},
        {label: "Ghast (1d4)", action: () => rollDice(1, 4).total},
        {label: "Scorpion, Giant (1d6)", action: () => rollDice(1, 6).total},
        {label: "Ants, Giant (2d6)", action: () => rollDice(2, 6).total},
        {label: "Coffer Corpses (1d6)", action: () => rollDice(1, 6).total},
        {label: "Harpies (1d8)", action: () => rollDice(1, 8).total},
        {label: "Wolf, Warg (1d4)", action: () => rollDice(1, 4).total},
        {label: "Shambling Mound (1d3)", action: () => rollDice(1, 3).total},
        {label: "Trolls (1d8)", action: () => rollDice(1, 8).total}
    ],
    level_high:
        [
            {label: "Large Crocodiles", action: () => rollDice(1, 3).total},
            {label: "Manticores", action: () => rollDice(1, 2).total},
            {label: "Giant Boar", action: () => rollDice(1, 4).total},
            {label: "Mummy", action: () => rollDice(1, 4).total},
            {label: "Wyvern", action: () => rollDice(1, 2).total},
            {label: "Ape, Carnivorous", action: () => rollDice(2, 4).total},
            {label: "Wights", action: () => rollDice(1, 6).total},
            {label: "Beetle, Giant Rhinoceros", action: () => rollDice(1, 4).total},
            {label: "Triceratops", action: () => rollDice(1, 1).total},
            {label: "Vampire", action: () => rollDice(1, 1).total}
        ]
}

function rivalParty() {
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
        if (rollDice(1, 100).total <= 25) {
            const count = rollDice(1, 4).total;
            return 'with ' + count + ' Level 0 Men-at-Arms'
        } else {
            return '';
        }
    }());
    return  rivalParties[rollDice(1, 6).total - 1] + mAa;
}

export function generateRandomEncounter(encounterLevel) {
    let result = bm_table1[encounterLevel][rollDice(1, 10).total-1];
    // let result = bm_table1[partyLevel][9];
    let count = result.action();
    let label = result.label;
    if (count !== undefined){
        return  count + " " + label;
    }
}
