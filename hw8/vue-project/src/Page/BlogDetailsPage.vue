<template>
  <div>
    <HeaderComponent />
    <BlogDetailsHeaderBox />
    <BlogDetailsArticles />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BlogDetailsArticles from '@/components/pages/BlogDetailsPage/BlogDetailsArticles.vue';
import BlogDetailsHeaderBox from '@/components/pages/BlogDetailsPage/BlogDetailsHeaderBox.vue';

export default {
  name: 'BlogDetailsPage',
  components:{
    FooterComponent,
    HeaderComponent,
    BlogDetailsArticles,
    BlogDetailsHeaderBox
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