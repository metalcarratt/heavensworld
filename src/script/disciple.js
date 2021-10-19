const maleNames = [
    'Yi Yusheng',
    'Peng Renshu',
    'Dai Shaoqing',
    'Deng Xing',
    'Ren Jianyu'
];

const femaleNames = [
    'Sun Hualing',
    'Liu Xia',
    'Zou Lanfen',
    'Jin Luli',
    'Hao Suyin'
]

export default {
    newDisciple() {
        let g = Math.floor(Math.random() * 2);
        let gender = g === 0 ? 'Male' : 'Female';

        let n = Math.floor(Math.random() * 5);
        let name;
        if (gender === 'Male') {
            name = maleNames[n];
        } else {
            name = femaleNames[n];
        }

        let i = Math.floor(Math.random() * 9) + 1;
        let image = (gender === 'Male' ? 'male' : 'female') + '-' + i + ".PNG";

        return {
            name,
            gender,
            image,
            job: ''
        }
    }
}