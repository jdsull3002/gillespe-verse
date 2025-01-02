export enum opacityType {
    transparent= "transparent",
    translucent = "translucent",
    opaque = "opaque"
}

export enum gemSizeString {
    verySmall= "Very Small",
    small = "Small",
    average = "Average",
    large = "Large",
    veryLarge = "Very Large",
    huge = "Huge",
}

export enum gemSize {
    verySmall,
    small,
    average ,
    large ,
    veryLarge,
    huge
}

export enum gemValueMultiplier {
    verySmall= 0.5,
    small = 0.8,
    average = 1,
    large = 1.2,
    veryLarge = 1.5,
    huge = 2,
}

export enum gemClass {
    ornamental,
    semiPrecious,
    fancy ,
    precious,
    gem,
    jewel
}

export type GemDetails = {
    description: string,
    image: string|null,
    name :string,
    opacity: opacityType
    value: number
}

export type GemTreasure = {
    derivedValue: number,
    description: GemDetails,
    size: gemSize
}
