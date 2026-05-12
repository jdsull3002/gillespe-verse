import {rollDice, rollDie} from "../shared/utilities";

const bm_table2: {[key: string]: number[]} = {
        "Mazzahs the Magnificent": [1, 1, 1],
        "Bollo the Barkeeper": [95, 95, 99],
        "Taycee the Barmaid": [95, 95, 99],
        "Urgritte the Barmaid": [95, 95, 99],
        "Merda the Barmaid": [75, 85, 99],
        "Karg Barrelgut the Smith": [10, 10, 65],
        "Othar of St. Ygg": [1, 1, 5],
        "Cella of St. Ygg": [1, 1, 5],
        "Gamdar of St. Ygg": [10, 10, 10],
        "Lord Kell Ironguard": [1, 1, 1],
        "Krothos Ironguard": [10, 12, 15],
        "Ollis Blackfell": [10, 12, 15],
        "Valeron": [5, 10, 35],
        "Guildmaster Osen": [10, 10, 65],
        "Billworth Turgen": [5, 10, 50],
        "Alaster the Idiot (outside)": [80, 80, 80],
        "Perni Ticklebottom": [10, 30, 10],
        "H.H.R. Huffnpuff": [10, 10, 35],
        "Hendon the Miller": [5, 5, 20],
        "Tamson, son of Hendon": [5, 10, 35],
        "Yusef, second son of Hendon": [5, 5, 5],
        "Alzo Danuth (50%, in disguise)": [1, 1, 5],
        "Urnst Gunter (50%, in disguise)": [1, 1, 5],
        "Villagers (farmers, etc) (2d4+1)": [30, 60, 90],
        "Renata the Robber (in disguise)": [5, 5, 5],
        "The Norse Whisperers": [15, 25, 50],
        "The Fearsome Fivesome": [15, 25, 50],
        "The Bastards of Bogtown": [15, 25, 50],
        "Bertrand's Brigands": [15, 25, 50],
        "The Outriders of Uleck": [15, 25, 50],
        "Boon Companions": [15, 25, 50],
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
export function generatePatronList(tOd: string): { patrons: any[]; timeOfDay: string }
{
    let timeOfDay = getToDIndex(tOd),
        singularVerbPhrase = ' was there in the ',
        pluralVerbPhrase = " were there in the ",
        verbPhrase = singularVerbPhrase,
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
                case "Alzo Danuth (50%, in disguise)":
                    if (rollDie( 100) < 5) {
                        k = "Alzo Danuth in disguise"
                    } else {
                        k = "Alzo Danuth";
                    }
                    break;

                case "Urnst Gunter (50%, in disguise)":
                    if (rollDie( 100) < 5) {
                        k = "Urnst Gunter in disguise"
                    } else {
                        k = "Urnst Gunter";
                    }
                    break;

                case "Villagers (farmers, etc) (2d4+1)":
                    k = (rollDice(2, 4, 1).total ) + " Villagers (farmers, etc)";
                    verbPhrase = pluralVerbPhrase;
                    break;


                case "Level 0 Men-at-Arms (1d4)":
                    k = (rollDie(4)) + " Level 0 Men-at-Arms";
                    verbPhrase = pluralVerbPhrase;
                    break;

                case "The Norse Whisperers":
                case "The Fearsome Fivesome":
                case "The Bastards of Bogtown":
                case "Bertrand’s Brigands":
                case "The Outriders of Uleck":
                case "Boon Companions":
                case "Porters/Torchbearers":
                    verbPhrase = pluralVerbPhrase;
                    break;

                default:
                    break;
            }

            finalTerm.push(k);
        }
    }
    return { patrons: finalTerm, timeOfDay: timeOfDayLabels[timeOfDay]}
}
