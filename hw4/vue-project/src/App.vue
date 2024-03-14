<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <MainPageTop></MainPageTop>
    <MainPageProject></MainPageProject>
    <MainPageCounter></MainPageCounter>
    <MainPageBlog></MainPageBlog>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainPageTop from './components/pages/MainPage/MainPageTop.vue';
import MainPageProject from './components/pages/MainPage/MainPageProject.vue';
import MainPageCounter from './components/pages/MainPage/MainPageCounter.vue';
import MainPageBlog from './components/pages/MainPage/MainPageBlog.vue';
// import BlogDetailsHeaderBox from './components/pages/BlogDetailsPage/BlogDetailsHeaderBox.vue';
// import BlogDetailsArticles from './components/pages/BlogDetailsPage/BlogDetailsArticles.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MainPageTop,
    MainPageProject,
    MainPageCounter,
    MainPageBlog,
    // BlogDetailsHeaderBox,
    // BlogDetailsArticles
    
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
