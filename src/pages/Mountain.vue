<template>
    <div class="page brown">
        <heading/>
        <message>From a sea of clouds rises a mountain paradise</message>
        <message>Fame: <strong>{{ fame }}</strong></message>
        <message>Stones: <strong>{{ stones }}</strong></message>
        <message>
            <img-btn src="svg/map.png" @click.native="$emit('changePage', 'ResourceMap')" label="Map" />
            <img-btn src="svg/stone.png" @click.native="$emit('changePage', 'Resources')" label="Resources" />
            <img-btn src="svg/herb.PNG" @click.native="$emit('changePage', 'Herbery')" label="Herbery" />
        </message>
        <h2>Disciples:</h2>
        <span class="disciples">
            <DiscipleProfile 
                v-for="(disciple, index) of disciples"
                :key="index"
                :disciple="disciple"
                :hoverable="true"
                @click.native="showDisciple(disciple)"
            />
        </span>
        <button @click="endTurn">End Turn</button>
        <button @click="promote">Promote teachings</button>
        <button>Cultivate</button>
        <button>Seek Enlightenment</button>
        <button>Develop techniques</button>
        <button>Travel</button>
    </div>
</template>

<script>
import store from '@/store/store.js';
import pageStore from '@/store/page.js';
import turnStore from '@/store/turn.js';
import DiscipleProfile from '@/components/DiscipleProfile.vue';
import turnEnd from '@/script/turnEnd.js';

export default {
    components: { DiscipleProfile },
    computed: {
        fame() {
            return store.fame();
        },
        disciples() {
            return store.disciples();
        },
        stones() {
            return store.stones();
        }
    },
    mounted() {
        this.processEndTurn();
    },
    methods: {
        processEndTurn() {
            if (turnStore.isTurnOver()) {
                const endTurnResult = turnEnd.processEndTurn();
                if (endTurnResult === turnStore.RECRUIT) {
                    this.$emit("changePage", "NewFollower");

                } else if (endTurnResult === turnStore.REPORT) {
                    this.$emit("changePage", "EndTurnReport");
                    
                } else {
                    turnStore.newTurn();
                }
            }
        },
        endTurn() {
            turnStore.turnOver();
            this.processEndTurn();
        },
        promote() {
            turnStore.turnOver();
            this.$emit("changePage", "Promote");
        },
        showDisciple(disciple) {
            pageStore.setViewDisciple(disciple);
            this.$emit("changePage", "Disciple");
        }
    }
}
</script>