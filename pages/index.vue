<template>
  <div class="flex flex-col flex-auto">
    <div class="flex-initial flex flex-row">
      <chat-receiver></chat-receiver>
    </div>
    <div id="map-wrap" class="flex-auto h-full">
      <client-only>
        <l-map ref="myMap" :zoom=13 :center="initialLocation" @ready="doSomethingOnReady()" @locationfound="onLocationFound">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="initialLocation"></l-marker>
          <v-locatecontrol ref="locate"/>
        </l-map>
      </client-only>
    </div>
    <div class="flex-initial flex flex-col">
      <h2>CHAT</h2>
      <div class="flex flex-row flex-wrap">
        <chat-sender></chat-sender>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        initialLocation: [50.6789, 17.9061],
        locationGPS: false
      }
    },
    methods: {
      doSomethingOnReady() {
      
          this.map = this.$refs.myMap.mapObject;
          this.$refs.locate.mapObject.start();
      },
      onLocationFound(location){
        console.log(location);
    
        // this.$refs.locate.mapObject.stopFollowing();
      }
    },
  };
</script>

<style lang="postcss" scoped>
  
</style>