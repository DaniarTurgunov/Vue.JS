<template>
    <header class="container center">
        <div class="logo">
            <a href="#">
                <img src="../assets/images/Logo.svg" alt="logo">
            </a>
        </div>
        <div class="header-button">
            <a href="" class="head-btn">Home</a>
            <a href="" class="head-btn">Project</a>
            <a href="" class="head-btn">Blog</a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

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
.container{
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 57px;
    margin-top: 53px;
}
.header-button{
    width: 243px;
    display: flex;
    justify-content: space-between;
    & a {
        font-family: 'Jost'; 
        font-size: 22px;
        font-weight: 400; 
        line-height: 33px;
        text-decoration: none;
        color: #292F36;
    }
}
</style>