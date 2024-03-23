<template>
  <div>
    <HeaderComponent />
    <OurProjectHeaderBox />
    <OurProjectMain />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import OurProjectHeaderBox from '@/components/pages/OurProjectPage/OurProjectHeaderBox.vue';
import OurProjectMain from '@/components/pages/OurProjectPage/OurProjectMain.vue';

export default {
  name: 'OurProject',
  components: {
    HeaderComponent,
    OurProjectMain,
    OurProjectHeaderBox,
    FooterComponent,
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
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