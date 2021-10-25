<template>
    <div class="details">
        <span class="detail">
            <label>{{ getLabel }} </label>

            <template v-if="hasStones">
                <span class="special">contains spirit stones</span>
                <button @click="mineStones" v-if="!hasWorker">Mine stones</button>
            </template>

            <template v-if="hasPlants">
                <span class="special" >discovered spirit plants</span>
                <button @click="gatherPlants" v-if="!hasWorker">Gather</button>
            </template>

            <template v-if="hasSoil">
                <span class="special" >has rich soil</span>
                <button @click="plantHerbs">Plant herbs</button>
            </template>

            <span class="warning" v-if="isMortalTerritory">Mortal territory</span>
        </span>
        <span class="worker" v-if="hasWorker">
            <DiscipleProfile 
                :disciple="getWorker"
                :hideJob="true"
                :role="'mining'"
            />
            <button @click="removeWorker">Remove</button>
        </span>
    </div>
</template>

<script>
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import working from '@/script/working.js';

export default {
    props: [ 'selected' ],
    components: { DiscipleProfile },
    computed: {
        getLabel() {
            return this.selected.type + (this.selected.placename !== '' ? ' - ' + this.selected.placename : '');
        },
        hasStones() {
            return this.selected.stones === 1;
        },
        hasPlants() {
            return this.selected.plants === 1;
        },
        hasSoil() {
            return this.selected.soil === 1;
        },
        hasWorker() {
            console.log("CellDetails#hasWorker");
            return working.hasWorker(this.selected.rowIndex, this.selected.cellIndex);
        },
        getWorker() {
            return working.getWorker(this.selected.rowIndex, this.selected.cellIndex);
        },
        isMortalTerritory() {
            return this.selected.type === 'city' || this.selected.type === 'farm';
        }
    },
    methods: {
        mineStones() {
            this.$emit('showStonesModal');
        },
        gatherPlants() {
            this.$emit('showPlantsModal');
        },
        plantHerbs() {
            this.$emit('showHerbsModal')
        },
        removeWorker() {
            console.log("CellDetails#removeWorker");
            working.removeWorkerAt(this.selected.rowIndex, this.selected.cellIndex);
        }
    }
}
</script>