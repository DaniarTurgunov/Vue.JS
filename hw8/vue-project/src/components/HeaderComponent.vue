<template>
    <header class="container center">
        <div class="logo">
            <router-link class="head-btn" to="/">
                <img src="../assets/images/Logo.svg" alt="logo">
            </router-link>
        </div>
        <div class="header-button">
            <router-link class="head-btn" to="/">Home</router-link>
            <router-link class="head-btn" to="/Project">Project</router-link>
            <router-link class="head-btn" to="/Blog">Blog</router-link>
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
    font-family: 'Jost'; 
    font-size: 22px;
    font-weight: 400; 
    line-height: 33px;
    color: #292F36;

}
.head-btn{
    text-decoration: none;
    color:#292F36;
}
</style>