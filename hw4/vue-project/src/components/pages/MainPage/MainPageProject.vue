<template>
    <main class="main-container center">
        <div class="title-main">
            <h1>Follow Our Projects</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
        </div>
        <div class="main-cards">
            <div class="card1" v-for="project in projectList" :key="project.id">
                <img :src="require('../../../assets/images/' + project.img)" alt="project.img" :class="project.class">
                <div class="under-main-card">
                    <div class="left">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.text }}</p>
                    </div>
                    <div class="right">
                        <button><img src="../../../assets/images/simvol.svg" alt="mainBTN"></button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'MainPageTop',

  data() {
    return {
        projectList: [
            {
                id:0,
                img: 'card1.svg',
                class: 'phcardleft',
                title: 'Modern Kitchan',
                text: 'Decor / Artchitecture'
            },
            {
                id:1,
                img: 'card2.svg',
                class: 'phcardright',
                title: 'Modern Kitchan',
                text: 'Decor / Artchitecture'
            },
            {
                id:2,
                img: 'card3.svg',
                class: 'phcardleft',
                title: 'Modern Kitchan',
                text: 'Decor / Artchitecture'
            },
            {
                id:3,
                img: 'card4.svg',
                class: 'phcardright',
                title: 'Modern Kitchan',
                text: 'Decor / Artchitecture'
            }
        ]      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.title-main{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 93px;
    & h1{
        font-size: 50px; 
        font-family: 'DM Serif Display'; 
        font-weight: 400; 
        line-height: 62.50px; 
        word-wrap: break-word;
        margin-bottom: 8px;
        text-align: center;
        width: 733px;
    }
    & p{
        font-size: 22px;
        font-family: 'Jost'; 
        font-weight: 400; 
        line-height: 33px; 
        word-wrap: break-word;
        text-align: center;
        width: 733px;
    }
    

}
.main-cards{
    display: grid;
    justify-content: space-between;
    grid-template-columns: 550px 550px;
    grid-template-rows: auto auto;
    margin-bottom: 96px;
    & .phcardright{
        border-top-left-radius: 80px;
    }
    & .phcardleft{
        border-top-right-radius: 80px;
    }

}
.card1{
    margin-bottom: 52px;
}
.under-main-card{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .left{

        & h3{
            font-size: 25px; 
            font-family: 'DM Serif Display'; 
            font-weight: 400; 
            line-height: 31.25px; 
            word-wrap: break-word;
        }
        & p{
            font-size: 22px; 
            font-family: 'Jost'; 
            font-weight: 400; 
            line-height: 33px; 
            word-wrap: break-word
        }
    }

    & .right {
        & button{
            border: none;
            width: 70px;
            height: 70px;
            color: #292F36;
            border-radius: 9999px;
            
        }
        & button:active{ 
            transform: scale(0.98); 
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); 
        } 
        & img{
                width: 8px;
                height: 18px;
            }
    }
}

</style>