import {rollDice, rollDie} from "../shared/utilities";

const bm_table2: {[key: string]: number[]} = {
    "Cravos Blackburn": [95, 95, 99],
    "Skye the Barmaid": [95, 95, 99],
    "Sultra the Barmaid": [95, 95, 99],
    "Ivanna the Barmaid": [75, 85, 99],
    "Retep Garnerstone": [10, 30, 65],
    "Samuel Armstrong": [10, 10, 50],
    "Mordicar Justhand": [1, 1, 1],
    "Ser Haldric de Luisignon": [1, 1, 5],
    "Fanig of St. Ygg": [1, 15, 30],
    "Kelda of the Seven Stars": [10, 12, 15],
    "Muirrion the Magician": [10, 12, 15],
    "Randle Oliver": [10, 30, 65],
    "Radloc Hudson": [10, 10, 65],
    "Eldrex the Fletcher": [5, 10, 50],
    "Jon the Miller": [15, 35, 80],
    "Garrick Ironmane": [10, 30, 80],
    "Herrick Broadside": [10, 10, 35],
    "Darkeye Thieves (Incognito)": [10, 20, 60],
    "Regular Patrons (Drunk)": [70, 80, 90],
    "Villagers (farmers, etc) (2d4+1)": [70, 80, 90],
    "Inglorious Bastards": [15, 25, 70],
    "Two..and a Half-Man": [15, 25, 70],
    "Sons of Arkhos": [15, 25, 70],
    "The Booty Snatchers": [15, 25, 70],
    "Red Bannermen": [1, 10, 20],
    "Dirty Rotten Scoundrels": [15, 25, 70],
    "The Heathens": [15, 25, 70],
    "Level 0 Men-at-Arms (1d4)": [15, 25, 60],
    "Level 1 Classed Henchmen (1)": [5, 15, 35],
    "Porters/Torchbearers": [25, 45, 75]
    },

    timeOfDayLabels: string[] = ['Morning', 'Afternoon', 'Evening'],

    getToDIndex = function (word: string): number {
        return timeOfDayLabels.findIndex( function (i) {
            return i.toLowerCase() === word.toLowerCase();
        });
    };
export function generatePatronList(tOd: string): string
{
    let timeOfDay = getToDIndex(tOd),
        finalTerm = [];

    if (timeOfDay === -1) {
        throw new Error('Could not Parse that time of day. Please use "Morning, Afternoon, or Evening".');
    }

    for (const patron in bm_table2) {

        let i = bm_table2[patron],
        k = patron;

        let odds = i[timeOfDay],
            roll = rollDie( 100);

        if (roll <= odds) {

            switch (k) {
                case "Villagers (farmers, etc) (2d4+1)":
                    k = (rollDice(2, 4, 1).total ) + " Villagers (farmers, etc)";
                    break;

                case "Level 0 Men-at-Arms (1d4)":
                    k = (rollDie(4)) + " Level 0 Men-at-Arms";
                    break;

                default:
                    break;
            }

            finalTerm.push(k);
        }
    }
    return {
        patrons: finalTerm,
        timeOfDay: timeOfDayLabels[timeOfDay]
    }
}

