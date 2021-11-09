<template>
    <span class="cell_outer">
        <img v-if="cell === 'grass'" src="svg/grass.png"  class="cell grass" />
        <img v-else-if="cell === 'forest'" src="svg/trees.png" class="cell forest" />
        <img v-else-if="cell === 'hill'" src="svg/hills.png" class="cell hill"/>
        <img v-else-if="cell === 'lake'" src="svg/lake.png" class="cell lake"/>
        <img v-else-if="cell === 'mountain'" src="svg/mountains2.png" class="cell mountain" />
        <img v-else-if="cell === 'farm'" src="svg/farm.png" class="cell farm" />
        <img v-else-if="cell === 'city'" src="svg/city.png" class="cell city" />

        <span
            :class="['overlay', (selected.rowIndex === rindex && selected.cellIndex === cindex) ? 'selected' : '']"
            @click="$emit('select', {rindex, cindex})"
        >    
            <span v-if="stones[rindex][cindex] === 1" class="sstone">
                <img src="svg/stone.png" />
            </span>
            <span v-if="plants[rindex][cindex] === 1" class="plants">
                <img src="svg/herb.PNG" />
            </span>
            <span v-if="soil[rindex][cindex] === 1" class="soil">
                <img src="svg/farm.png" />
            </span>
            <span v-if="places[rindex][cindex] !== ''" class="placename">{{ places[rindex][cindex] }}</span>
            <span v-if="activity[rindex][cindex] != null" class="worker">
                <img :src="'images/' + activity[rindex][cindex].disciple.image" />
            </span>
        </span>
    </span>
</template>

<script>
import mapStore from '@/store/map.js';

export default {
    props: [ 'cell', 'selected', 'rindex', 'cindex' ],
    computed: {
        stones: () => mapStore.stones(),
        plants: () => mapStore.plants(),
        soil: () => mapStore.soil(),
        places: () => mapStore.places(),
        activity: () => mapStore.activity(),
    }
}
</script>