<template>
  <div class="top">
    <component :is="page" @changePage="changePage" />
  </div>
</template>

<script>
import Inspiration from '@/pages/Inspiration.vue';
import NewFollower from '@/pages/NewFollower.vue';
import ResourceMap from '@/pages/ResourceMap.vue';
import Mountain from '@/pages/Mountain';
import Promote from '@/pages/Promote';
import Disciple from '@/pages/Disciple';
import Resources from '@/pages/Resources.vue';
import Herbery from '@/pages/Herbery.vue';
import EndTurnReport from '@/pages/EndTurnReport.vue';
import TravelMap from '@/pages/TravelMap.vue';
import MapDesigner from '@/pages/MapDesigner.vue';

// const MOUNTAIN_PAGE = "Mountain";
const INSPIRATION_PAGE = "Inspiration";
// const FOLLOWER_PAGE = "NewFollower";
// const PROMOTE_PAGE = "Promote";
// const MAP_PAGE = "Map";

import mapJs from '@/store/map.js';

export default {
  name: 'App',
  components: {
    Inspiration, NewFollower, ResourceMap, Mountain, Promote, Disciple, Resources, Herbery, EndTurnReport, TravelMap, MapDesigner
  },
  data() {
    return {
      page: INSPIRATION_PAGE
    }
  },
  mounted() {
    const map = mapJs.map();
    const hall = mapJs.find((cell) => cell.place === 'Hall');
    const locations = [];
    for (let r = hall.r - 1; r < hall.r + 4; r++) {
      for (let c = hall.c - 2; c < hall.c + 3; c++) {
        if (map[r] && map[r][c]) {
          locations.push({ri: r, ci: c});
        }
      }
    }
    mapJs.clearFog(locations);
  },
  methods: {
    changePage(page) {
      this.page = page;
    }
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
