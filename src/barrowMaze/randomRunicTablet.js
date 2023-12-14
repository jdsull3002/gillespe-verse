import {rollDice} from "@/utilities";

const bm_table6 = [
    "Save versus death or die.",
    "Save versus spell or suffer curse (amnesia).",
    "Save versus spell or suffer curse (blindness).",
    "Save versus spell or suffer curse (insanity).",
    "Save versus spell or suffer curse (mummy rot).",
    "Save versus spell or suffer Enfeeblement.",
    "Save versus spell or suffer Feeblemind.",
    "Save versus spell or suffer Confusion.",
    "Reader will fail their next save attempt.",
    "Glyph of Warding (Fire: 10 hp/save for ½).",
    "Tablet provides history of The Tablet of Chaos.",
    "Tablet provides history of Nergal.",
    "Tablet provides history of Set and Orcus.",
    "Tablet is a partial map (Referee’s choice).",
    "Tablet is a random 3rd level magic-user spell.",
    "Tablet is a random 3rd level cleric spell.",
    "Reader receives a Bless spell.",
    "Reader receives a Protection from Evil spell.",
    "Reader will succeed on next save attempt.",
    "Reader receives +1 to one randomly determined ability score."
];

export function randomRunicTablet(){
    return bm_table6[rollDice(1, 20).total-1];
}




