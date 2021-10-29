<template>
    <div class="page green">
        <heading/>

        <!-- The map -->
        <span class="row" v-for="(row, rindex) in map" :key="rindex">
            <span :class="['cell', cell]" v-for="(cell, cindex) in row" :key="cindex" @click="select(rindex, cindex)">
                <span v-if="stones[rindex][cindex] === 1" class="sstone">S</span>
                <span v-if="plants[rindex][cindex] === 1" class="plants">P</span>
                <span v-if="soil[rindex][cindex] === 1" class="soil">s</span>
                <span v-if="places[rindex][cindex] !== ''" class="placename">{{ places[rindex][cindex] }}</span>
                <span v-if="activity[rindex][cindex] != null" class="worker">
                    <img :src="'images/' + activity[rindex][cindex].disciple.image" />
                </span>
            </span>
        </span>

        <!-- Details for a specific cell -->
        <CellDetails
            :selected="selected"
            @showStonesModal="showStonesModal"
            @showPlantsModal="showPlantsModal"
            @showHerbsModal='showHerbsModal'
        />

        <!-- Buttons -->
        <button @click="$emit('changePage', 'Mountain')">Mountain</button>

        <!-- Modals -->
        <modal v-if="isShowingModal && !isShowingHerbsModal">
            <h3 v-if="isShowingStonesModal">Send who to mine stones?</h3>
            <h3 v-else-if="isShowingPlantsModal">Send who to gather plants?</h3>

            <DiscipleProfile 
                v-for="(disciple, index) of orderedDisciples"
                :key="index"
                :disciple="disciple"
                :hoverable="true"
                @click.native="sendWorker(disciple)"
            />

            <button @click="showModal = ''">Cancel</button>
        </modal>

        <FarmHerbs
            v-if="isShowingHerbsModal"
            :row="selected.rowIndex"
            :cell="selected.cellIndex"
            @close="showModal = ''"
        />
    </div>
</template>

<script>
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import CellDetails from './map/CellDetails.vue';
import FarmHerbs from '@/pages/map/FarmHerbs.vue';

import store from '@/store/store.js';
import mapStore from '@/store/map.js';
import working from '@/script/working.js';
import resources from '@/script/resources.js';

export default {
    components: { DiscipleProfile, CellDetails, FarmHerbs },
    data() {
        return {
            selected: {},
            showModal: '',
            chooseHerbModal: false,
            orderedDisciples: []
        }
    },
    computed: {
        map: () => mapStore.map(),
        stones: () => mapStore.stones(),
        plants: () => mapStore.plants(),
        soil: () => mapStore.soil(),
        places: () => mapStore.places(),
        activity: () => mapStore.activity(),
        disciples: () => store.disciples(),
        herbs: () => store.getHerbs(),
        isShowingStonesModal() {
            return this.showModal === resources.STONES;
        },
        isShowingPlantsModal() {
            return this.showModal === resources.PLANTS;
        },
        isShowingHerbsModal() {
            return this.showModal === resources.HERBS;
        },
        isShowingModal() {
            return this.showModal !== '';
        },
        choosingHerbModal() {
            return this.chooseHerbModal;
        }
    },
    mounted() {
        this.select(1, 3);
    },
    methods: {
        showStonesModal() {
            this.showModal = resources.STONES;
            this.orderDisciples();
        },
        showPlantsModal() {
            this.showModal = resources.PLANTS;
            this.orderDisciples();
        },
        showHerbsModal() {
            this.showModal = resources.HERBS;
            this.orderDisciples();
        },
        select(rowIndex, cellIndex) {
            this.selected = {
                type: this.map[rowIndex][cellIndex],
                stones: this.stones[rowIndex][cellIndex],
                plants: this.plants[rowIndex][cellIndex],
                soil: this.soil[rowIndex][cellIndex],
                placename: this.places[rowIndex][cellIndex],
                rowIndex,
                cellIndex
            }
        },
        sendWorker(disciple) {
            if (this.showModal === resources.HERBS) {
                this.chooseHerbModal = true;
            } else {
                working.startActivity(this.selected.rowIndex, this.selected.cellIndex, disciple, this.showModal);
            }
            this.showModal = '';
        },
        orderDisciples() {
            this.orderedDisciples = store.orderedDisciples();
        },
        getHerb(herb) {
            return store.getHerb(herb);
        }
    }
}
</script>
