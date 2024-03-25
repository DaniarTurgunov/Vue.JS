<template>
    <footer class="footer center">
        <div class="footer__left">
            <img src="../assets/images/Logo.svg" alt="logo" class="footer__left-logoftr">
            <p class="footer__left-title">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__left-icons">
                <img src="../assets/images/X.svg" alt="" class="icon-footer">
                <img src="../assets/images/IN.svg" alt="" class="icon-footer">
            </div>
        </div>  
        <div class="footer__middle">
            <h3 class="footer__middle-title">Pages</h3>
            <router-link class="head-btn" to="/">Home</router-link>
            <router-link class="head-btn" to="/Project">Project</router-link>
            <router-link class="head-btn" to="/Blog">Blog</router-link>
        </div>
        <div class="footer__service"></div>
        <div class="footer__right">
            <h3 class="footer__right-title">Contact</h3>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p>contact@interno.com</p>
            <p>(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',

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

.footer {
    display: grid;
    grid-template-columns: 393px 125px 120px 258px;
    gap: 101px;
    grid-template-rows: 272px;
    margin-bottom: 134px;
    &__left{
        &-logoftr{
            margin-bottom: 18px;
        }   

        &-title{
            font-size: 22px; 
            font-family: 'Jost';
            font-weight: 400; 
            line-height: 33px; 
            letter-spacing: 0.22px; 
            word-wrap: break-word;
            margin-bottom: 31px;
        }

        &-icons{
            width: 88px;
            display: flex;
            justify-content: space-between;
        }
        
    }
    &__middle{
        display: flex;
        flex-direction: column;
        & h3{
            margin-bottom: 26px;
            font-size: 25px; 
            font-family: 'DM Serif Display'; 
            font-weight: 400; 
            line-height: 31.25px; 
            word-wrap: break-word;
        }
        & .head-btn{
            color: #292F36;
            margin-bottom: 40px;
            gap: 26px;
            font-size: 22px; 
            font-family: 'Jost';
            font-weight: 400; 
            line-height: 33px; 
            letter-spacing: 0.22px; 
            word-wrap: break-word;
            text-decoration: none;
        }

    }
    &__right{
        & h3{
            margin-bottom: 26px;
            font-size: 25px; 
            font-family: 'DM Serif Display'; 
            font-weight: 400; 
            line-height: 31.25px; 
            word-wrap: break-word;
        }
        & p{
            margin-bottom: 40px;
            gap: 26px;
            font-size: 22px; 
            font-family: 'Jost';
            font-weight: 400; 
            line-height: 33px; 
            letter-spacing: 0.22px; 
            word-wrap: break-word;
        }
    }
}

</style>