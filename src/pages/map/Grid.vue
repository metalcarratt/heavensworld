<template>
    <span class="grid">
        <span class="row" v-for="(row, rindex) in visibleMap" :key="rindex">
            <template v-for="(cell, cindex) in row" >
                <slot :cell="cell" :rindex="rindex" :cindex="cindex"></slot>
            </template>
        </span>
    </span>
</template>

<script>
import mapviewport from '@/store/mapviewport.js';
import mapStore from '@/store/map.js';

const MAX_WIDTH = 7;
const MAX_HEIGHT = 7;

export default {
    props: [ 'map' ],
    computed: {
        width() {
            return mapStore.width() < MAX_WIDTH ? mapStore.width() : MAX_WIDTH;
        },
        height() {
            return mapStore.height() < MAX_HEIGHT ? mapStore.height() : MAX_HEIGHT;
        },

        offset() {
            const offset = { r: 0, c: 0};
            const center = mapviewport.at();
            console.log(`center r=${center.r} c=${center.c}`);

            const half_r = parseInt(MAX_HEIGHT / 2);
            const half_c = parseInt(MAX_WIDTH / 2);

            offset.r = center.r - half_r;
            offset.c = center.c - half_c;

            console.log("offset r " + offset.r);
            console.log("offset c " + offset.c);

            return offset;
        },
        visibleMap() {
            const vmap = [];
            console.log("height: " + this.height);
            for (var r = 0; r < this.height; r++) {
                vmap.push([]);
                console.log("width: " + this.width);
                for (var c = 0; c < this.width; c++) {
                    const atr = r + this.offset.r;
                    const atc = c + this.offset.c;
                    console.log(`push ${atr}, ${atc}`);
                    if (this.map[atr] && this.map[atr][atc]) {
                        vmap[r].push(this.map[atr][atc]);
                        vmap[r][c].truer = atr;
                        vmap[r][c].truec = atc;
                    }
                    
                }
            }

            return vmap;
        }
    }
}
</script>