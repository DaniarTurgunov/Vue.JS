<template>
  <div>
    <HeaderComponent class="center"/>
    <div class="notfound center">
      <div class="notfound__content">
        <h1 class="notfound__title">404</h1>
        <p class="notfound__text">We are sorry, but the page you requested was not found</p>
        <router-link class="notfound__button" to="/">
          <div class="notfound__button-text">
            <p>Back To Home</p>
            <img src="@/assets/images/row_left.svg" alt="row_left">
          </div>
        </router-link>
      </div>
      <img class="notfound__img" src="@/assets/images/404.jpg" alt="404">
    </div>
    <FooterComponent class="center"/>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'NotFoundPage',
  components: {
    HeaderComponent,
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


.notfound {
    padding-left: calc(50% - 1200px / 2);
    display: flex;
    gap: 81px;
    align-items: center;
    margin-bottom: 100px;
  
    &__title {
      color: #CDA274;
      font-family: 'DM Serif Display';
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  
    &__text {
      color: #292F36;
      font-family: 'DM Serif Display';
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.35px;
      margin-top: 15px;
      margin-bottom: 23px;
    }
  
    &__img {
      border-end-start-radius: 353px;
      width:900px;
      height: 400px
    }
  
    &__button-text {
      width: 253px;
      padding: 26px 0;
      background-color: #292f36;
      border-radius: 18px;
      display: flex;
      gap: 10px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
  
      & p {
        color: #fff;
        font-family: 'Jost';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
      }
    }
  }

</style>