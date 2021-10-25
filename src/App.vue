<template>
  <div class="top">
    <component :is="page" @changePage="changePage" />
  </div>
</template>

<script>
import Inspiration from '@/pages/Inspiration.vue';
import NewFollower from '@/pages/NewFollower.vue';
import Map from '@/pages/Map.vue';
import Mountain from '@/pages/Mountain';
import Promote from '@/pages/Promote';

// const MOUNTAIN_PAGE = "Mountain";
const INSPIRATION_PAGE = "Inspiration";
// const FOLLOWER_PAGE = "NewFollower";
// const PROMOTE_PAGE = "Promote";
// const MAP_PAGE = "Map";

export default {
  name: 'App',
  components: {
    Inspiration, NewFollower, Map, Mountain, Promote
  },
  data() {
    return {
      page: INSPIRATION_PAGE
    }
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
