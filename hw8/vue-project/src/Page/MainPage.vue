<template>
  <div>
    <HeaderComponent class="center"/>
    <MainPageTop />
    <MainPageProject class="center"/>
    <MainPageCounter />
    <MainPageBlog class="center"/>
    <FooterComponent class="center"/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainPageBlog from '@/components/pages/MainPage/MainPageBlog.vue';
import MainPageCounter from '@/components/pages/MainPage/MainPageCounter.vue';
import MainPageProject from '@/components/pages/MainPage/MainPageProject.vue';
import MainPageTop from '@/components/pages/MainPage/MainPageTop.vue';

export default {
  name: 'MainPage',
  components:{
    HeaderComponent,
    FooterComponent,
    MainPageBlog,
    MainPageCounter,
    MainPageProject,
    MainPageTop
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