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
        <span class="worker detail" v-if="hasWorker !== null && hasWorker !== undefined">
            <DiscipleProfile 
                v-if="hasWorker != null"
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
            console.log("1");
            console.log(this.selected);
            let terrain = '';
            if (this.selected.type) {
                switch (this.selected.type.terrain) {
                    case "F": terrain = "Forest"; break;
                    case "H": terrain = "Hill"; break;
                    case "M": terrain = "Mountain"; break;
                    case "G": terrain = "Grass"; break;
                    case "L": terrain = "Lake"; break;
                    case "A": terrain = "Farm"; break;
                    case "C": terrain = "City"; break;
                }
            }
            let place = '';
            if (this.selected.type && this.selected.type.place) {
                place = ' - ' + this.selected.type.place;
            }
            return terrain + place;
        },
        hasStones() {
            console.log("2");
            return this.selected.type && this.selected.type.stones === 1;
        },
        hasPlants() {
            console.log("3");
            return this.selected.type && this.selected.type.plants === 1;
        },
        hasSoil() {
            console.log("4");
            return this.selected.type && this.selected.type.soil === 1;
        },
        hasWorker() {
            console.log("5");
            const t = working.hasWorker(this.selected.rowIndex, this.selected.cellIndex);
            console.log(t);
            return t;
        },
        getWorker() {
            console.log("6");
            return working.getWorker(this.selected.rowIndex, this.selected.cellIndex);
        },
        isMortalTerritory() {
            console.log("7");
            return this.selected.type && (this.selected.type.terrain === 'city' || this.selected.type.terrain === 'farm');
        },
        hasHerbs() {
            console.log("8");
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