<template>
  <div id="app">
    <OurProject />

  </div>
</template>

<script>
import OurProject from './Page/OurProject.vue';



export default {
  name: 'App',
  components: {
    OurProject

  }
}
</script>

<style lang="scss" scoped>
$width_site: 1200px;

* {
    margin: 0;
    padding: 0;
    
}

.center {
    padding-left: calc(50% - $width_site / 2);
    padding-right: calc(50% - $width_site / 2);
}

</style>
