import {GemDetails, opacityType} from "./gemEnums";
import { rollDie } from "../shared/utilities";

const BlackOpal: GemDetails = {
    name: 'Black Opal',
    opacity: opacityType.translucent,
    description: 'dark green with black mottling and golden flecks',
    value: rollDie(1, 3) * 1000
}

const BlackSapphire: GemDetails = {
    name: 'Black Sapphire',
    opacity: opacityType.translucent,
    description: 'lustrous black with glowing highlights',
    value: rollDie(1, 3, 2) * 1000
}

const Diamond: GemDetails = {
    name: 'Diamond',
    opacity: opacityType.transparent,
    description: 'clear blue-white with lesser stones clear white or pale tints',
    value: rollDie(1, 3, 2) * 1000
}

const Emerald: GemDetails = {
    name: 'Emerald',
    opacity: opacityType.transparent,
    description: 'deep bright green',
    value: rollDie(1, 5) * 1000
}

const FireOpal: GemDetails = {
    name: 'Fire Opal',
    opacity: opacityType.translucent,
    description: 'fiery red',
    value: rollDie(1, 3) * 1000
}

const Jacinth: GemDetails = {
    name: 'Jacinth',
    opacity: opacityType.transparent,
    description: 'fiery orange (Corundum)',
    value: rollDie(1, 3, 2) * 1000
}

const Opal: GemDetails = {
    name: 'Opal',
    opacity: opacityType.translucent,
    description: 'pale blue with green and golden mottling',
    value: rollDie(1, 5) * 1000
}

const OrientalAmethyst: GemDetails = {
    name: 'Oriental Amethyst',
    opacity: opacityType.transparent,
    description: 'rich purple (Corundum)',
    value: rollDie(1, 3) * 1000
}

const OrientalEmerald: GemDetails = {
    name: 'Oriental Emerald',
    opacity: opacityType.transparent,
    description: 'clear bright green (Corundum)',
    value: rollDie(1, 3, 2) * 1000
}

const OrientalTopaz: GemDetails = {
    name: 'Oriental Topaz',
    opacity: opacityType.translucent,
    description: 'fiery yellow (Corundum)',
    value: rollDie(1, 3) * 1000
}

const Ruby: GemDetails = {
    name: 'Ruby',
    opacity: opacityType.transparent,
    description: 'clear red to deep crimson (Corundum)',
    value: rollDie(1, 3, 2) * 1000
}

const Sapphire: GemDetails = {
    name: 'Sapphire',
    opacity: opacityType.transparent,
    description: 'clear to medium blue(Corundum)',
    value: rollDie(1, 3) * 1000
}

const StarRuby: GemDetails = {
    name: 'Star Ruby',
    opacity: opacityType.translucent,
    description: 'translucent ruby with white “star” center',
    value: rollDie(1, 3, 2) * 1000
}

const StarSapphire: GemDetails = {
    name: 'Star Sapphire',
    opacity: opacityType.translucent,
    description: 'translucent sapphire with white “star” center',
    value: rollDie(1, 3, 2) * 1000
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
