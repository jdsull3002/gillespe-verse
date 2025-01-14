import {opacityType, GemDetails} from "./gemEnums";
import {rollDice, rollDie} from "../shared/utilities";

const pathRoot = 'gemstones/fancy';

// Precious 100
// 1. Amber: watery gold to rich gold (100)
const Amber: GemDetails = {
    description: 'watery gold to rich gold',
    image: pathRoot + '/amber.jpg',
    name: "Amber",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 2. Alexandrite: dark green (100)
const Alexandrite: GemDetails = {
    description: 'dark green',
    image: pathRoot + '/alexandrite.jpg',
    name: "Alexandrite",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 3. Amethyst: deep purple (100)
const Amethyst: GemDetails = {
    description: 'deep purple',
    image: pathRoot + '/amethyst.png',
    name: "Amethyst",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 5. Chrysoberyl: yellow green to green (100)
const Chrysoberyl: GemDetails = {
    description: 'yellow green to green',
    image: pathRoot + '/chrysoberyl.jpg',
    name: "Chrysoberyl",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 6. Coral*: crimson (100)
const Coral: GemDetails = {
    description: 'crimson',
    image: pathRoot + '/coral.jpg',
    name: "Coral",
    opacity: opacityType.opaque,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 7. Garnet: red, brown-green (100)
const CommonGarnet: GemDetails = {
    description: 'red, brown-green',
    image: pathRoot + '/common_garnet.jpg',
    name: "Garnet",
    opacity: opacityType.transparent,
    value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 8. Jade: light green, deep green, green and white, white (100)
const Jade: GemDetails = {
    description: 'light green, deep green, green and white, white',
    image: pathRoot + '/jade.webp',
    name: "Jade",
    opacity: opacityType.translucent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 9. Jet*: deep black (100)
const Jet: GemDetails = {
    description: 'deep black',
    image: pathRoot + '/jet.jpg',
    name: "Jet",
    opacity: opacityType.opaque,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 10. Pearl*:  (100)
const CommonPearl: GemDetails = {
    description: 'lustrous white, yellowish, pinkish',
    image: pathRoot + '/pearl.jpg',
    name: "Pearl",
    opacity: opacityType.opaque,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 12. Spinel: red, red-brown (100)
const CommonSpinel: GemDetails = {
    description: 'red, red-brown',
    image: pathRoot + '/common_spinel.jpg',
    name: "Spinel",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

// 14. Tourmaline: green pale, blue pale, brown pale, or reddish pale (100)
const Tourmaline: GemDetails = {
    description: 'green pale, blue pale, brown pale, or reddish pale',
    image: pathRoot + '/tourmaline.jpg',
    name: "Tourmaline",
    opacity: opacityType.transparent,
     value:  (rollDice(2, 20).total + 80) * 10 // 82 - 120
}

export const PreciousStones = [
    Amber,
    Alexandrite,
    Amethyst,
    Chrysoberyl,
    Coral,
    CommonGarnet,
    Jade,
    Jet,
    CommonPearl,
    CommonSpinel,
    Tourmaline
]

// fancy 500
// 4. Aquamarine: pale blue green (500) 400 - 600 /50s
const Aquamarine: GemDetails = {
    description: 'pale blue green',
    image: pathRoot + '/rare_aquamarine.jpg',
    name: "Aquamarine",
    opacity: opacityType.transparent,
    value: (rollDie(4) * 50) + 400
}

// 7. Garnet: violet (the most prized) (500)
const RareGarnet: GemDetails = {
    description: 'violet',
    image: pathRoot + '/rare_garnet.jpg',
    name: "Garnet",
    opacity: opacityType.transparent,
    value: (rollDie(4) * 50) + 400
}

// 10. Pearl*:  pure black (the most prized) (500)
const RarePearl: GemDetails = {
    description: 'pure black ',
    image: pathRoot + '/black_pearl.jpg',
    name: "Pearl",
    opacity: opacityType.opaque,
    value: (rollDie(4) * 50) + 400
}

// 11. Peridot: rich olive green (Chrysolite) (500)
const Peridot: GemDetails = {
    description: 'rich olive green (Chrysolite)',
    image: pathRoot + '/peridot.jpg',
    name: "Peridot",
    opacity: opacityType.transparent,
    value: (rollDie(4) * 50) + 400
}

// 12. Spinel: very deep blue (the most prized) (500)
const RareSpinel: GemDetails = {
    description: 'green or very deep blue',
    image: pathRoot + '/rare_spinel.jpg',
    name: "Spinel",
    opacity: opacityType.transparent,
    value: (rollDie(4) * 50) + 400
}

// 13. Topaz: golden yellow (500)
const Topaz: GemDetails = {
    description: 'golden yellow',
    image: pathRoot + '/topaz.png',
    name: "Topaz",
    opacity: opacityType.transparent,
    value: (rollDie(4) * 50) + 400
}

export const FancyStones = [
    Aquamarine,
    RareGarnet,
    RarePearl,
    Peridot,
    RareSpinel,
    Topaz,
]
