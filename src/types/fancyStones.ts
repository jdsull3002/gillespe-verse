import {GemDetails} from "../shared/treasureGems";
import {opacityType} from "./gemEnums";

// Precious 100
// 1. Amber: watery gold to rich gold (100)
const Amber: GemDetails = {
    name: "Amber",
    opacity: opacityType.transparent,
    description: 'watery gold to rich gold',
    value: 100
}

// 2. Alexandrite: dark green (100)
const Alexandrite: GemDetails = {
    name: "Alexandrite",
    opacity: opacityType.transparent,
    description: 'dark green',
    value: 100
}

// 3. Amethyst: deep purple (100)
const Amethyst: GemDetails = {
    name: "Amethyst",
    opacity: opacityType.transparent,
    description: 'deep purple',
    value: 100
}

// 5. Chrysoberyl: yellow green to green (100)
const Chrysoberyl: GemDetails = {
    name: "Chrysoberyl",
    opacity: opacityType.transparent,
    description: 'yellow green to green',
    value: 100
}

// 6. Coral*: crimson (100)
const Coral: GemDetails = {
    name: "Coral",
    opacity: opacityType.opaque,
    description: 'crimson',
    value: 100
}

// 7. Garnet: red, brown-green (100)
const CommonGarnet: GemDetails = {
    name: "Garnet",
    opacity: opacityType.transparent,
    description: 'red, brown-green',
    value: 100
}

// 8. Jade: light green, deep green, green and white, white (100)
const Jade: GemDetails = {
    name: "Jade",
    opacity: opacityType.translucent,
    description: 'light green, deep green, green and white, white',
    value: 100
}

// 9. Jet*: deep black (100)
const Jet: GemDetails = {
    name: "Jet",
    opacity: opacityType.opaque,
    description: 'deep black',
    value: 100
}

// 10. Pearl*:  (100)
const CommonPearl: GemDetails = {
    name: "Pearl",
    opacity: opacityType.opaque,
    description: 'lustrous white, yellowish, pinkish',
    value: 100
}

// 12. Spinel: red, red-brown (100)
const CommonSpinel: GemDetails = {
    name: "Spinel",
    opacity: opacityType.transparent,
    description: 'red, red-brown',
    value: 100
}

// 14. Tourmaline: green pale, blue pale, brown pale, or reddish pale (100)
const Tourmaline: GemDetails = {
    name: "Tourmaline",
    opacity: opacityType.transparent,
    description: 'green pale, blue pale, brown pale, or reddish pale',
    value: 100
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
// 4. Aquamarine: pale blue green (500)
const Aquamarine: GemDetails = {
    name: "Aquamarine",
    opacity: opacityType.transparent,
    description: 'pale blue green',
    value: 500
}

// 7. Garnet: violet (the most prized) (500)
const RareGarnet: GemDetails = {
    name: "Garnet",
    opacity: opacityType.transparent,
    description: 'violet',
    value: 500
}

// 10. Pearl*:  pure black (the most prized) (500)
const RarePearl: GemDetails = {
    name: "Pearl",
    opacity: opacityType.opaque,
    description: 'pure black ',
    value: 500
}

// 11. Peridot: rich olive green (Chrysolite) (500)
const Peridot: GemDetails = {
    name: "Peridot",
    opacity: opacityType.transparent,
    description: 'rich olive green (Chrysolite)',
    value: 500
}

// 12. Spinel: very deep blue (the most prized) (500)
const RareSpinel: GemDetails = {
    name: "Spinel",
    opacity: opacityType.transparent,
    description: 'green or very deep blue',
    value: 500
}

// 13. Topaz: golden yellow (500)
const Topaz: GemDetails = {
    name: "Topaz",
    opacity: opacityType.transparent,
    description: 'golden yellow',
    value: 500
}

export const FancyStones = [
    Aquamarine,
    RareGarnet,
    RarePearl,
    Peridot,
    RareSpinel,
    Topaz,
]
