import map1 from '@/data/maps/map1b.js';

const FOREST = 'F';
const HILL = 'H';
const MOUNTAIN = 'M';
const GRASS = 'G';
const LAKE = 'L';
const FARM = 'A';
const CITY = 'C';



const initialFog = function(map) {
    let fog = [];
    for (var r = 0; r < map.length; r++) {
        fog.push([]);
        for (var c = 0; c < map[0].length; c++) {
            fog[r].push(1);
        }
    }
    return fog;
}

export default {
    FOREST, HILL, MOUNTAIN, GRASS, LAKE, FARM, CITY,
    initialFog,
    createMap() {
        console.log(map1);  
        return map1;
    }
}