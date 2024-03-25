<template>
  <div class="ourprojecthb">
    <div class="center">
        <div class="ourprojecthb__title breadcrumbsblog ">
            <h1> Our Project </h1>
            <nav>
                <ul class="ourprojecthb__title-breadcrumbs">
                    <li><a href="index.html">HOME /</a></li>
                    <li><a href="#">Project </a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'OurProjectHeaderBox',

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
.ourprojecthb{
  background-image: url("../../../assets/images/ProjectHB.svg") ;
  height: 356px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  &__title{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 52px;
      padding: 62px 41px;
      width: 503px;
      background-color: white;
      border-top-left-radius: 37px;
      border-top-right-radius: 37px;
      margin-bottom: 0px;
      position: relative;
      top: 51%;
      
      & h1{
          margin:0;
          text-align: center;
          width: 1200px;
          color: #292F36; 
          font-size: 50px; 
          font-family: 'DM Serif Display';
          font-weight: 400; 
          line-height: 62.50px; 
          word-wrap: break-word;
      }
      & p{
          text-align: center;
          width: 820px;
      }
      &-breadcrumbs{
          list-style-type: none;
          display: flex;
          gap: 10px;
          color: #636363;
          font-size: 14px;
          font-weight: 300;
          padding: 0;
          & a{
              color: #4D5053; 
              font-size: 22px; 
              font-family: 'Jost'; 
              font-weight: 400; 
              line-height: 33px; 
              letter-spacing: 0.22px; 
              word-wrap: break-word;
              text-decoration: none;
          }
      }
  }
}
</style>