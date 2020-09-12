<template>
  <div class="flex flex-col flex-auto">
    <div id="map-wrap" class="flex-auto h-full">
      <client-only>
        <l-map ref="myMap" :zoom=13 :center="initialLocation" @ready="doSomethingOnReady()">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="initialLocation"></l-marker>
          <v-locatecontrol ref="locate"/>
        </l-map>
      </client-only>
    </div>
    <div class="flex-initial">
          CHAT
      <nuxt-link
        :key='link'
        :to='`/${link}`'
        v-for='link in links'
        >
          {{ link }}
        </nuxt-link>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        initialLocation: [50.6789, 17.9061],
        locationGPS: false,
        links: [
          'receiver',
          'sender',
        ],
      }
    },
    methods: {
      doSomethingOnReady() {
        // debugger;
          this.map = this.$refs.myMap.mapObject;
          this.$refs.locate.mapObject.start();
      },
      onLocationFound(location){
        console.log(location);

        this.$refs.locate.mapObject.stopFollowing();
      }
    },
  };
</script>

<style lang="postcss" scoped>
  
</style>