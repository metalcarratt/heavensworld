const FIRELEAF = "Fireleaf";                // poison antidote, fire energy
const OCEAN_LILY = "Ocean Lily";          // healing, water energy
const VIOLET_FLYTRAP = "Violet Flytrap";    // poison, hallucinations (inspiration)

const herbs = [ FIRELEAF, OCEAN_LILY, VIOLET_FLYTRAP ];

const herbDetails = {
    [FIRELEAF]: {
        image: "images/herb_fireleaf.PNG",
        description: "A firey-red plant that grows in volcanic ash. Can heal poisons."
    },
    [OCEAN_LILY]: {
        image: "images/herb_oceanlily.jpg",
        description: "A lily of the sea embued with potent water energy. Can heal wounds."
    },
    [VIOLET_FLYTRAP]: {
        image: "images/herb_violetflytrap.PNG",
        description: "An alluring plant that emits strange toxins and can incite hallucinations."
    }
}

export default {
    FIRELEAF, OCEAN_LILY, VIOLET_FLYTRAP,

    acquireRandomHerb() {
        const r = Math.floor(Math.random() * 3);
        return herbs[r];
    },

    getImage(herb) {
        return herbDetails[herb].image;
    },
    getDescription(herb) {
        return herbDetails[herb].description;
    }
}