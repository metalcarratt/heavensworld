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
                <button @click="gatherPlants">Gather</button>
            </template>

            <template v-if="hasSoil">
                <span class="special" >has rich soil</span>
                <button @click="plantHerbs" v-if="!hasWorker && hasHerbs">Plant herbs</button>
                <span v-else-if="!hasHerbs" class="role">No herbs to plant</span>
            </template>

            <span class="warning" v-if="isMortalTerritory">Mortal territory</span>
        </span>
        <span class="worker detail" v-if="hasWorker">
            <DiscipleProfile 
                :disciple="getWorker"
                :hideJob="true"
                :role="'mining'"
            />
            <button @click="removeWorker">Remove</button>
        </span>

        <AssignWorkerModals
            v-if="hasModal"
            :selected="selected"
        />
    </div>
</template>

<script>
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import AssignWorkerModals from './AssignWorkerModals.vue';
import working from '@/script/working.js';
import store from '@/store/store.js';
import modal from '@/heavensworld/modal/modal.js';

export default {
    props: [ 'selected' ],
    components: { DiscipleProfile, AssignWorkerModals },
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
            return working.hasWorker(this.selected.rowIndex, this.selected.cellIndex);
        },
        getWorker() {
            return working.getWorker(this.selected.rowIndex, this.selected.cellIndex);
        },
        isMortalTerritory() {
            return this.selected.type === 'city' || this.selected.type === 'farm';
        },
        hasHerbs() {
            return store.hasHerbs();
        },
        hasModal: () => modal.showing()
    },
    methods: {
        mineStones() {
            modal.show(modal.MINE_STONES_MODAL);
        },
        gatherPlants() {
            modal.show(modal.GATHER_PLANTS_MODAL);
        },
        plantHerbs() {
            modal.show(modal.FARM_HERBS_MODAL);
        },
        removeWorker() {
            console.log("CellDetails#removeWorker");
            working.removeWorkerAt(this.selected.rowIndex, this.selected.cellIndex);
        }
    }
}
</script>