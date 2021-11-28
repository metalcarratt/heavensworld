<template>
    <div class="page green designer">
        <Grid :map="map">
            <template v-slot:default="{cell, rindex, cindex}">
                <Cell
                    :key="cindex"
                    :cell="cell"
                    :rindex="rindex"
                    :cindex="cindex"
                    :showResources="true"
                    :selected="selectedIndex"
                    @select="selectCell(cell, rindex, cindex)"
                />
            </template>
        </Grid>

        <message>
            <Controls />
        </message>

        <br/><br/>
        <message>
            <span class="cell_outer" @click="selectPalette('')">
                <span class="cell" style="background-color: white" />
            </span>
            <Cell
                v-for="(letter, letterIter) in letters"
                :key="letterIter"
                :cell="{terrain: letter}"
                :selected="selectedPalette === letter"
                @select="selectPalette(letter)"
            />
        </message>

       

        <br/><br/>
        <message v-if="selectedCell.terrain">
            <fieldset>
                <input type="checkbox" v-model="selectedCell.stones" />
                <label>Stones</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" v-model="selectedCell.plants" />
                <label>Plants</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" v-model="selectedCell.soil" />
                <label>Soil</label>
            </fieldset>
            <fieldset>
                <label>Place</label>
                <input type="text" v-model="selectedCell.place" />
            </fieldset> 
        </message>

        <button @click="addRowAfter">Add one row after</button>
        <button @click="addColumnAfter">Add one column after</button>
        <button @click="addRowBefore">Add one row before</button>
        <button @click="addColumnBefore">Add one column before</button>

        <h2>Export</h2>
        <textarea :value="JSON.stringify(map)" style="width: 100%; height: 400px" />
    </div>
</template>

<script>
import buildMap from '@/script/buildMap.js';
import Cell from './map/Cell.vue';
import Grid from './map/Grid.vue';
import Controls from './map/Controls.vue';
import mapviewport from '@/store/mapviewport.js';

export default {
    components: { Cell, Grid, Controls },
    data() {
        return {
            map: buildMap.createMap(),
            selectedPalette: '',
            selectedCell: {},
            selectedIndex: {},
            letters: ['F', 'H', 'M', 'G', 'L', 'A', 'C'],
        }
    },
    mounted() {
        mapviewport.start(3, 3);
    },
    methods: {
        selectPalette(letter) {
            this.selectedPalette = letter;
        },
        selectCell(cell, rindex, cindex) {
            if (this.selectedPalette !== '') {
                cell.terrain = this.selectedPalette;
            }
            this.selectedIndex = {
                rowIndex: rindex, 
                cellIndex: cindex,
            }
            this.selectedCell = this.map[rindex][cindex];
        },
        addRowAfter() {
            const length = this.map[0].length;
            const row = [];
            for (var i = 0; i < length; i++) {
                row.push({terrain: 'G'});
            }
            this.map.push(row);
            this.$forceUpdate();
        },
        addColumnAfter() {
            for (var i = 0; i < this.map.length; i++) {
                this.map[i].push({terrain: 'G'});
            }
            this.$forceUpdate();
        },
        addRowBefore() {
            const length = this.map[0].length;
            const row = [];
            for (var i = 0; i < length; i++) {
                row.push({terrain: 'G'});
            }
            this.map.unshift(row);
            this.$forceUpdate();
        },
        addColumnBefore() {
            for (var i = 0; i < this.map.length; i++) {
                this.map[i].unshift({terrain: 'G'});
            }
            this.$forceUpdate();
        }
    }
}
</script>