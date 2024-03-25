<template>
    <div class="top center">
        <img src="../../../assets/images/topBG.svg" alt="top-image">
        <div class="top__started"> 
            <h1 class="top__started-titletop">Let Your Home Be Unique</h1>
            <p class="title-text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            <button class="title-btn"><span>Get Started</span> 
            <img src="../../../assets/images/topBTN.svg" alt="title-icon-btn">
            </button>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'MainPageTop',

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
.top{
    position: relative;
    margin-bottom: 96px;
    
    & img {
        border-radius: 70px;
    }
    
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 75px;
        border-radius: 18px;
        background-color: #292F36;
        box-shadow: 0px 10px 20px rgba(192.31, 192.31, 192.31, 0.35);
    }
    & button:active{ 
        transform: scale(0.98); 
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); 
    } 
    & span{
        margin-right: 10px;
        color: white;
        font-size: 18px;
        font-family: 'Jost';
        font-weight: 600; 
        line-height: 22.50px; 
        word-wrap: break-word
    }
    &__started{
        position: absolute;
        top: 30%;
        margin-left: 52px;
        width: 433px;
        & p {
            font-family: 'Jost'; 
            font-size: 22px;
            font-weight: 400; 
            line-height: 33px;
            text-decoration: none;
            word-wrap: break-word;
            margin-bottom: 21px;
        }
        &-title{
            color: #292F36; 
            font-size: 65px; 
            font-family: 'DM Serif Display';
            font-weight: 400; 
            line-height: 81.25px;
            word-wrap: break-word
        }

    }
}


</style>