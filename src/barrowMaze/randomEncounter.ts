import {labelPluralize, rollDice, rollDie} from "../shared/utilities";

const bm_table1 = {
    level_low: [
        {
            label: "Frogling",
            action:
                {
                    name: 'rollDice',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Rival Adventuring Party*",
            action:
                {
                    name: 'rivalParty',
                    callback: () => rivalParty()
                }
        },
        {
            label: "Ordinary Crocodile",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Pterodactyl",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Wolf",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 6).total
                }
        },
        {
            label: "Skeleton",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 8)
                }
        },
        {
            label: "Zombie",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Giant Poisonous Frog",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Insect Swarm",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 1)
                }
        },
        {
            label: "Roll on levels 3–4",
            action:
                {
                    name: 'generateRandomEncounter',
                    callback: () => generateRandomEncounter('level_med', 1)
                }
        }
    ],
    level_med: [
        {
            label: "Axe Beak",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Lizardman",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Neanderthal",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Giant Toad",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Giant Leech",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Ghoul",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Pteranodon",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 2)
                }
        },
        {
            label: "Giant Python Snake",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 1)
                }
        },
        {
            label: "Giant Vulture",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Roll on levels 5–6",
            action:
                {
                    name: 'generateRandomEncounter',
                    callback: () => generateRandomEncounter('level_mid', 1)
                }
        }
    ],
    level_mid: [
        {
            label: "Owlbear",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Carnivorous Ape",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Ghast",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Giant Scorpion",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Giant Ant",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 6).total
                }
        },
        {
            label: "Coffer Corpse",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Harpy",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 8)
                }
        },
        {
            label: "Warg Wolf",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Shambling Mound",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 3)
                }
        },
        {
            label: "Troll",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 8)
                }
        }
    ],
    level_high: [
        {
            label: "Large Crocodile",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 3)
                }
        },
        {
            label: "Manticore",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 2)
                }
        },
        {
            label: "Giant Boar",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Mummy",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Wyvern",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 2)
                }
        },
        {
            label: "Carnivorous Ape",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDice(2, 4).total
                }
        },
        {
            label: "Wight",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 6)
                }
        },
        {
            label: "Giant Rhinoceros Beetle",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 4)
                }
        },
        {
            label: "Triceratops",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 1)
                }
        },
        {
            label: "Vampire",
            action:
                {
                    name: 'rollDie',
                    callback: () => rollDie( 1)
                }
        }
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
        if (rollDie( 100) <= 25) {
            const count = rollDie( 4);
            return 'with ' + count + ' Level 0 Men-at-Arms'
        } else {
            return '';
        }
    }());
    return rivalParties[rollDie( 6) - 1] + mAa;
}

export function generateRandomEncounter(encounterLevel: string ) :string {
    let response,
        {action, label} = bm_table1[encounterLevel][rollDie( 10) -1];

    if (action.name === 'generateRandomEncounter') {
        return action.callback();
    } else {
        const count = action.callback();

        if(count > 1){
            console.log(count > 1);
            label = labelPluralize(label);
        }
        response = count + " " + label;
    }
    return response;
}
