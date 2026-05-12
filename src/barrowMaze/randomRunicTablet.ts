import {rollDice, rollDie} from "../shared/utilities";
import { muSpells, clSpells }  from '../shared/spells';

const bm_table6: string[] = [
    "Save versus death or die.", //0
    "Save versus spell or suffer curse (amnesia).",
    "Save versus spell or suffer curse (blindness).",
    "Save versus spell or suffer curse (insanity).",
    "Save versus spell or suffer curse (mummy rot).",
    "Save versus spell or suffer Enfeeblement.",  //5
    "Save versus spell or suffer Feeblemind.",
    "Save versus spell or suffer Confusion.",
    "Reader will fail their next save attempt.",
    "Glyph of Warding (Fire: 10 hp/save for ½).",
    "Tablet provides history of The Tablet of Chaos.", //10
    "Tablet provides history of Nergal.",
    "Tablet provides history of Set and Orcus.",
    "Tablet is a partial map (Referee’s choice).",
    "Tablet is a random 3rd level magic-user spell.",
    "Tablet is a random 3rd level cleric spell.", //15
    "Reader receives a Bless spell.",
    "Reader receives a Protection from Evil spell.",
    "Reader will succeed on next save attempt.",
    "Reader receives +1 to one randomly determined ability score." //19
];

export function randomRunicTablet(): string{
    let dieRoll = rollDie( 20),
        responseString;

    console.log(dieRoll);

    switch(dieRoll) {
        case 15:
            responseString = 'Table is a copy of ' + muSpells[2][rollDie( muSpells[2].length) -1];
            break;
        case 16:
            responseString = 'Table is a copy of ' + clSpells[2][rollDie( clSpells[2].length) -1];
            break;
        case 20:
            let abilities = ['STR', 'INT', 'WIS', 'DEX', 'CON', 'CHA'];
            responseString = "Reader receives +1 to " + abilities[rollDie(6) -1] //19
            break
        default:
            responseString =  bm_table6[dieRoll-1];
    }
    return responseString;
}




