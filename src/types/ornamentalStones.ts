import {opacityType, GemDetails} from "./gemEnums";

const pathRoot = '../gemstones/ornamental'
const Azurite: GemDetails = {
    description: "mottled deep blue",
    image: pathRoot + '/azurite.png',
    name: "Azurite",
    opacity: opacityType.opaque,
    value: 10
}
const BandedAgate: GemDetails = {
    description: "striped brown and blue and white and reddish",
    image: pathRoot + '/banded_agate.jpg',
    name: "Banded Agate",
    opacity: opacityType.translucent,
    value: 10
}

const BlueQuartz: GemDetails = {
    description: "pale blue",
    image: pathRoot + '/blue_quartz.jpg',
    name: "Blue Quartz",
    opacity: opacityType.transparent,
    value: 10
}

const EyeAgate: GemDetails = {
    description: "circles of gray, white, brown, blue and/or green",
    image: pathRoot + '/eye_agate.jpg',
    name: "Eye Agate",
    opacity: opacityType.translucent,
    value: 10
}

const Hematite: GemDetails = {
    description: "gray-black",
    image: pathRoot + '/hematite.jpg',
    name: "Hematite",
    opacity: opacityType.opaque,
    value: 10
}

const LapisLazuli: GemDetails = {
    description: "light and dark blue with yellow flecks",
    image: pathRoot + '/lapis_lazuli.jpg' ,
    name: "Lapis Lazuli",
    opacity: opacityType.opaque,
    value: 10
}

const Malachite: GemDetails = {
    description: "striated light and dark green",
    image: pathRoot + '/malachite.jpg',
    name: "Malachite",
    opacity: opacityType.opaque,
    value: 10
}

const MossAgate: GemDetails = {
    description: "pink or yellow-white with grayish or greenish \"moss markings\"",
    image: pathRoot + '/moss_agate.jpg',
    name: "Moss Agate",
    opacity: opacityType.translucent,
    value: 10
}

const Obsidian: GemDetails = {
    description: "black volcanic glass",
    image: pathRoot + '/obsidian.jpg',
    name: "Obsidian",
    opacity: opacityType.opaque,
    value: 10
}

const Rhodochrosite: GemDetails = {
    description: "light pink",
    image: pathRoot + '/rhodochrosite.jpg',
    name: "Rhodochrosite",
    opacity: opacityType.opaque,
    value: 10
}

const TigerEye: GemDetails = {
    description: "rich brown with golden center under-hue",
    image: pathRoot + '/tiger_eye.jpg',
    name: "Tiger Eye",
    opacity: opacityType.translucent,
    value: 10
}

const Turquoise: GemDetails = {
    description: "light blue-green",
    image: pathRoot + '/turquoise.jpg',
    name: "Turquoise",
    opacity: opacityType.opaque,
    value: 10
}

export const OrnamentalStones = [
    Azurite,
    BandedAgate,
    BlueQuartz,
    EyeAgate,
    Hematite,
    LapisLazuli,
    Malachite,
    MossAgate,
    Obsidian,
    Rhodochrosite,
    TigerEye,
    Turquoise
]

