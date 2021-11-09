<template>
    <span ref="modals">
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

            <button @click="close">Cancel</button>
        </modal>

        <FarmHerbs
            v-if="isShowingHerbsModal"
            :row="selected.rowIndex"
            :cell="selected.cellIndex"
            @close="close"
        />
    </span>
</template>

<script>
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import FarmHerbs from './FarmHerbs.vue';
import store from '@/store/store.js';
import working from '@/script/working.js';
import modal from '@/heavensworld/modal/modal.js';

export default {
    components: { DiscipleProfile, FarmHerbs },
    props: [ 'selected' ],
    data() {
        return {    
            orderedDisciples: []
        }
    },
    computed: {
        isShowingStonesModal() {
            console.log("is-showing-stones-modal");
            // this.orderedDisciples = store.orderedDisciples();
            return modal.is(modal.MINE_STONES_MODAL);
        },
        isShowingPlantsModal() {
            // this.orderedDisciples = store.orderedDisciples();
            return modal.is(modal.GATHER_PLANTS_MODAL);
        },
        isShowingHerbsModal() {
            // this.orderedDisciples = store.orderedDisciples();
            return modal.is(modal.FARM_HERBS_MODAL);
        },
        isShowingModal() {
            return modal.showing();
        }
    },
    mounted() {
        this.orderDisciples();
    },
    methods :{
        orderDisciples() {
            console.log("order-disciples");
            this.orderedDisciples = store.orderedDisciples();
        },
        sendWorker(disciple) {
            if (this.isShowingHerbsModal) {
                // this.chooseHerbModal = true;
                modal.show(modal.CHOOSE_HERB_MODAL);
            } else {
                working.startActivity(this.selected.rowIndex, this.selected.cellIndex, disciple, modal.activity());
            }
            this.orderDisciples();
            this.close();
        },
        close() {
            modal.close();
        }
    }
}
</script>