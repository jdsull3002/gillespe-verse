import {rollDice} from "@/utilities";

const bm_table5 = [
    'The entrance sealed behind us. Cannot get out.',
    'They are coming.',
    'Beware the dark water.',
    'Don’t go on!',
    'Cannot get out!',
    'Something is following us. Beware the eyes in the dark!',
    'Make no sound. They will seek you out.',
    'I screwed the barmaid at The Brazen Strumpet.',
    'Pullo was here.',
    'Rhymes with numbers.',
    'Gyx-yag sent us!',
    'Beware the great minotaur.'
]

export function generateWallGraffiti(){
    return bm_table5[rollDice(1, 12).total-1];

}
