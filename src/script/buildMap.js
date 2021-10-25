const initialMap = [
    [
        'forest',
        'hill',
        'hill',
        'hill',
        'forest'
    ],
    [
        'forest',
        'hill',
        'mountain',
        'hill',
        'forest'
    ],
    [
        'lake',
        'forest',
        'hill',
        'forest',
        'grass'
    ],
    [
        'forest',
        'grass',
        'forest',
        'grass',
        'farm'
    ],
    [
        'farm',
        'farm',
        'city',
        'farm',
        'farm'
    ]
];

const initialStones = [
    [0,0,0,0,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

const initialPlants = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,0],
    [0,1,0,0,0],
    [0,0,0,0,0]
];

const initialSoil = [
    [0,0,0,0,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

const initialPlaces = [
    ['','','','',''],
    ['','','Hall','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','Liyue','','']
];

const initialActivity = [
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null]
];

export default {
    initialMap,
    initialStones,
    initialPlants,
    initialSoil,
    initialPlaces,
    initialActivity
}