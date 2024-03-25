<template>
  <div>
    <HeaderComponent />
    <BlogHeaderBox />
    <BlogLastPost />
    <BlogMainArticles />
    <BlogPagination />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BlogHeaderBox from '@/components/pages/BlogPage/BlogHeaderBox.vue';
import BlogLastPost from '@/components/pages/BlogPage/BlogLastPost.vue';
import BlogMainArticles from '@/components/pages/BlogPage/BlogMainArticles.vue';
import BlogPagination from '@/components/pages/BlogPage/BlogPagination.vue';

export default {
  name: 'BlogPage',
  components: {
    BlogPagination,
    BlogMainArticles,
    BlogLastPost,
    BlogHeaderBox,
    HeaderComponent,
    FooterComponent
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