export enum opacityType {
    transparent= "transparent",
    translucent = "translucent",
    opaque = "opaque"
}

export enum gemSizeEnum {
    verySmall= "very small",
    small = "small",
    average = "average",
    large = "large",
    veryLarge = "veryLarge",
    huge = "huge",
}

export enum gemClass {
    ornamental= "ornamental",
    semiPrecious = "semiPrecious",
    fancy = "fancy",
    precious = "precious",
    gem = "gem",
    jewel = "jewel"
}

export type GemDetails = {
    name :string,
    opacity: opacityType
    description: string,
    value: number
}

export type GemTreasure = {
    baseValue: number,
    description: GemDetails,
    size: gemSizeEnum
}
