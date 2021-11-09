import lodash from "lodash";

const GENDERS = ['Male', 'Female'];

const FAMILY_NAMES = [
    "Yi", "Peng", "Dai", "Deng", "Ren", "Sun", "Liu", "Zou", "Jin", "Hao", "Li", "Wang"
]

const MALE_NAMES = [
    'Yusheng',
    'Renshu',
    'Shaoqing',
    'Xing',
    'Jianyu'
];

const FEMALE_NAMES = [
    'Hualing',
    'Xia',
    'Lanfen',
    'Luli',
    'Suyin'
]

export default {
    getGender() {
        return GENDERS[lodash.random(0, 1)];
    },

    getName(gender) {
        const surname = FAMILY_NAMES[lodash.random(0, 11)];
        let firstname = '';
        if (gender === 'Male') {
            firstname = MALE_NAMES[lodash.random(0, 4)];
        } else if (gender === 'Female') {
            firstname = FEMALE_NAMES[lodash.random(0, 4)];
        }
        return `${surname} ${firstname}`;
    },

    getImage(gender) {
        return `${lodash.lowerCase(gender)}-${lodash.random(1, 9)}.PNG`;
    }
}