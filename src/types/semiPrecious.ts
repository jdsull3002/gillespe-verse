import {opacityType, GemDetails} from "./gemEnums";

const  pathRoot = 'public/gemstones/semi'

const Bloodstone: GemDetails = {
    description: "dark gray with red flecks",
    image: pathRoot + '/bloodstone.jpg',
    name: "Bloodstone",
    opacity: opacityType.opaque,
    value: 50
}

const Carnelian: GemDetails = {
    description: "orange to reddish brown (also called Sard)",
    image: pathRoot + '/carnelian.jpg',
    name: "Carnelian",
    opacity: opacityType.opaque,
    value: 50
}

const Chalcedony: GemDetails = {
    description: "white",
    image: pathRoot + '/bloodstone.jpg',
    name: "Chalcedony",
    opacity: opacityType.opaque,
    value: 50
}

const Chrysoprase: GemDetails = {
    description: "apple green to emerald green",
    image: pathRoot + '/bloodstone.jpg',
    name: "Chrysoprase",
    opacity: opacityType.translucent,
    value: 50
}

const Citrine: GemDetails = {
    description: "pale yellow brown",
    image: pathRoot + '/citrine.jpg',
    name: "Citrine",
    opacity: opacityType.transparent,
    value: 50
}

const Jasper: GemDetails = {
    description: "blue, black to brown",
    image: pathRoot + '/jasper.jpg',
    name: "Jasper",
    opacity: opacityType.opaque,
    value: 50
}

const Moonstone: GemDetails = {
    description: "white with pale blue glow",
    image: pathRoot + '/moonstone.jpg',
    name: "Moonstone",
    opacity: opacityType.translucent,
    value: 50
}

const Onyx: GemDetails = {
    description: "bands of black and white or pure black or white",
    image: pathRoot + '/black_onyx.jpg',
    name: "Onyx",
    opacity: opacityType.opaque,
    value: 50
}

const RockCrystal: GemDetails = {
    description: "clear",
    image: pathRoot + '/rock_crystal.jpg',
    name: "Rock Crystal",
    opacity: opacityType.transparent,
    value: 50
}

const Sardonyx: GemDetails = {
    description: "bands of sard (red) and onyx (white) or sard",
    image: pathRoot + '/sardonyx.jpg',
    name: "Sardonyx",
    opacity: opacityType.opaque,
    value: 50
}

const SmokyQuartz: GemDetails = {
    description: "gray, yellow, or blue (Cairngorm), all light",
    image: pathRoot + '/smoky_quartz.jpg',
    name: "Smoky Quartz",
    opacity: opacityType.transparent,
    value: 50
}

const StarRoseQuartz: GemDetails = {
    description: "translucent rosy stone with white “star” center",
    image: pathRoot + '/star_rose_quartz.jpg',
    name: "Star Rose Quartz Quartz",
    opacity: opacityType.transparent,
    value: 50
}

const Zircon: GemDetails = {
    description: "clear pale blue-green",
    image: pathRoot + '/zircon.jpg',
    name: "Zircon",
    opacity: opacityType.transparent,
    value: 50,

}


export const SemiPreciousStones = [
    Bloodstone,
    Carnelian,
    Chalcedony,
    Chrysoprase,
    Citrine,
    Jasper,
    Moonstone,
    Onyx,
    RockCrystal,
    Sardonyx,
    SmokyQuartz,
    StarRoseQuartz,
    Zircon,
]
