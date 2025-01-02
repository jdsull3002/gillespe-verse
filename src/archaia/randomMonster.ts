import {rollDice, rollDie, labelPluralize} from "../shared/utilities";

const cOa_table2 = {
    arches: {
        low: [
            {
                label: 'Giant Rat',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: 'Flagstone Spider',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4).total
                }
            },
            {
                label: 'Giant Centipede',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(2, 4).total
                }
            },
            {
                label: 'Skeleton',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 4).total
                }
            },
            {
                label: 'Zombie',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(2, 4).total
                }
            },
            {
                label: 'Wolf',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(2, 6).total
                }
            },
            {
                label: 'Green Slime or Yellow Mold',
                action: {
                    name: 'special',
                    callback: () => rollDice(1, 1).total
                }
            },
            {
                label: 'Giant Gecko Lizard',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: 'Grub Globule',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4, 1).total
                }
            },
            {
                label: 'Stirge or Giant Bat',
                action: {
                    name: 'special',
                    callback: () => rollDice(1, 10).total
                }
            }
        ],
        high: [
            {
                label: 'Hook Horror',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4, 1).total
                }
            },
            {
                label: 'Gibbering Mouther',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 2).total
                }
            },
            {
                label: 'Giant Scorpion',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4, 1).total
                }
            },
            {
                label: 'Mummy',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4).total
                }
            },
            {
                label: 'Ghoul or Ghast',
                action: {
                    name: 'special',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: 'Gargoyle',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 3).total
                }
            },
            {
                label: 'Carnivorous Ape',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 4, 1).total
                }
            },
            {
                label: 'Mimic or Rust Monster',
                action: {
                    name: 'special',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: 'Eye of Terror',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 1).total
                }
            },
            {
                label: 'Cloaker',
                action: {
                    name: 'rollDice',
                    callback: () => rollDice(1, 3).total
                }
            }
        ]
    },
    caverns: {
        low: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ],
        high: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ]
    },
    crypts: {
        low: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ],
        high: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ]
    },
    sewers: {
        low: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ],
        high: [
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            },
            {
                label: '', action: {
                    name: 'rollDice',
                    callback: () => rollDice(3, 6).total
                }
            }
        ]
    }
}

function handleSpecial(name: string) {
    let test, response
    switch (name) {
        case 'Mimic or Rust Monster':
            test = rollDie( 5);
            if (test < 3) {
                response = {
                    label: 'Mimic',
                    action: {
                        name: '',
                        callback: () => rollDice(1, 2).total
                    }
                }
            } else {
                response = {
                    label: 'Rust Monster',
                    action: {
                        name: '',
                        callback: () => rollDice(1, 3).total
                    }
                }
            }
            return response;

        case 'Ghoul or Ghast':
            test = rollDie( 6);
            if (test < 5) {
                response = {
                    label: 'Ghoul',
                    action: {
                        name: 'rollDie',
                        callback: () => rollDice(2, 4).total
                    }
                }
            } else {
                response = {
                    label: 'Ghast',
                    action: {
                        name: 'rollDie',
                        callback: () => rollDie( 2)
                    }
                }
            }
            return response;

        case 'Stirge or Giant Bat':
            test = rollDie( 2);
            response = {
                label: '',
                action: {
                    callback: () => rollDie( 10)
                }
            };
            if (test == 1) {
                response.label = 'Stirge';
            } else {
                response.label = 'Giant Bat';
            }
            return response;

        case 'Green Slime or Yellow Mold':
            test = rollDie( 2);
            response = {
                label: '',
                action: {
                    callback: () => rollDie( 1)
                }
            };
            if (test == 1) {
                response.label = 'Green Slime';
            } else {
                response.label = 'Yellow Mold';
            }
            return response;

    }
}

export function generateRandomMonster(area: string, level: string): string {
    let response,
        // {action, label} = cOa_table2[area][level][6];
        dieRoll = rollDie( 10) - 1,
        {action, label} = cOa_table2[area][level][dieRoll];

    if (action.name === 'special') {
        const newResponse = handleSpecial(label);
        action = newResponse.action;
        label = newResponse?.label;

    }
    const count = action.callback();

    if (count > 1) {
        label = labelPluralize(label);
    }
    response = count + " " + label;

    return response;
}


