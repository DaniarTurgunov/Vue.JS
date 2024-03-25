<template>
    <div class="pagination">
        <router-link class="count__page-number" v-for="page in totalPages" :key="`p${page}`" :to="`/blog/${page}`">
            <p class="count__page-number-text">{{ page }}</p>
        </router-link>
        <div class="count-page-wrap">
           <a href="#" class="count-page-number">
              <p>01</p>
           </a>
           <a href="#" class="count-page-number">
              <p>02</p>
           </a>
           <a href="#" class="count-page-number">
              <p>03</p>
           </a>
           <a href="#" class="count-page-num-next">
              <svg class="count__page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                 viewBox="0 0 53 52" fill="none">
                 <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                 <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
              </svg>
           </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlogPagination',

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
.count-page-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    & a{
        text-decoration: none;
        color:rgba(41, 47, 54, 1);
    }
    & a:hover{
        background-color: rgba(244, 240, 236, 1);
    }
}

.count-page-number{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
    & p{
        font-size: 22px;
        font-family: 'Jost';
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.22px;
        word-wrap: break-word;
    }
}

.count-page-num-next{
    border-radius: 9999px
}

.count-page-number:hover{
    background-color: rgba(244, 240, 236, 1);
}

.pagination{
    margin-bottom: 200px;
}

</style>