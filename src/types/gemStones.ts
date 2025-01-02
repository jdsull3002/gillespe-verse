import {GemDetails, opacityType} from "./gemEnums";
import { rollDie } from "../shared/utilities";

const pathRoot = '../gemstones/gems';

const BlackOpal: GemDetails = {
    description: 'dark green with black mottling and golden flecks',
    image: pathRoot + '/black_opal.webp',
    name: 'Black Opal',
    opacity: opacityType.translucent,
    value: rollDie(1, 3) * 1000
}

const BlackSapphire: GemDetails = {
    description: 'lustrous black with glowing highlights',
    image: pathRoot + '/black_sapphire.jpg',
    name: 'Black Sapphire',
    opacity: opacityType.translucent,
    value: rollDie( 3, 2) * 1000
}

const Diamond: GemDetails = {
    description: 'clear blue-white with lesser stones clear white or pale tints',
    image: pathRoot + '/diamond.jpg',
    name: 'Diamond',
    opacity: opacityType.transparent,
    value: rollDie( 3, 2) * 1000
}

const Emerald: GemDetails = {
    description: 'deep bright green',
    image: pathRoot + '/emerald.png',
    name: 'Emerald',
    opacity: opacityType.transparent,
    value: rollDie( 5) * 1000
}

const FireOpal: GemDetails = {
    description: 'fiery red',
    image: pathRoot + '/fire_opal.gif',
    name: 'Fire Opal',
    opacity: opacityType.translucent,
    value: rollDie( 3) * 1000
}

const Jacinth: GemDetails = {
    description: 'fiery orange (Corundum)',
    image: pathRoot + '/jacinth.jpg',
    name: 'Jacinth',
    opacity: opacityType.transparent,
    value: rollDie( 3, 2) * 1000
}

const Opal: GemDetails = {
    description: 'pale blue with green and golden mottling',
    image: pathRoot + '/opal.jpg',
    name: 'Opal',
    opacity: opacityType.translucent,
    value: rollDie( 5) * 1000
}

const OrientalAmethyst: GemDetails = {
    description: 'rich purple (Corundum)',
    image: pathRoot + '/oriental_amethyst.jpg',
    name: 'Oriental Amethyst',
    opacity: opacityType.transparent,
    value: rollDie( 3) * 1000
}

const OrientalEmerald: GemDetails = {
    description: 'clear bright green (Corundum)',
    image: pathRoot + '/oriental_emerald.jpg',
    name: 'Oriental Emerald',
    opacity: opacityType.transparent,
    value: rollDie( 3, 2) * 1000
}

const OrientalTopaz: GemDetails = {
    description: 'fiery yellow (Corundum)',
    image: pathRoot + '/oriental_topaz.jpg',
    name: 'Oriental Topaz',
    opacity: opacityType.translucent,
    value: rollDie(3) * 1000
}

const Ruby: GemDetails = {
    description: 'clear red to deep crimson (Corundum)',
    image: pathRoot + '/ruby.png',
    name: 'Ruby',
    opacity: opacityType.transparent,
    value: rollDie(3, 2) * 1000
}

const Sapphire: GemDetails = {
    description: 'clear to medium blue(Corundum)',
    image: pathRoot + '/sapphire.png',
    name: 'Sapphire',
    opacity: opacityType.transparent,
    value: rollDie(3) * 1000
}

const StarRuby: GemDetails = {
    description: 'translucent ruby with white “star” center',
    image: pathRoot + '/star_ruby.jpg',
    name: 'Star Ruby',
    opacity: opacityType.translucent,
    value: rollDie( 3, 2) * 1000
}

const StarSapphire: GemDetails = {
    description: 'translucent sapphire with white “star” center',
    image: pathRoot + 'star_sapphire.jpg',
    name: 'Star Sapphire',
    opacity: opacityType.translucent,
    value: rollDie( 3, 2) * 1000 //3-5K
}

export const GemStones: GemDetails[] = [
    BlackOpal,
    BlackSapphire,
    Diamond,
    Emerald,
    FireOpal,
    Jacinth,
    Opal,
    OrientalAmethyst,
    OrientalEmerald,
    OrientalTopaz,
    Ruby,
    Sapphire,
    StarRuby,
    StarSapphire
]
