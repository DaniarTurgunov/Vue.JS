<template>
    <main class="lastPost center">
        <h1>Lastest Post</h1>
        <div class="lastPost__boxpost">
            <div class="lastPost__boxpost_leftpost">
                <img src="../../../assets/images/Bloglastpost.svg" alt="left-post">
            </div>
            <div class="lastPost__boxpost_rightpost">
                <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br>
                Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div class="lastPost__boxpost_rightpost-underblockpost">
                    <p>26 December,2022</p>
                    <button><img src="../../../assets/images/simvol.svg" alt="mainBTN">
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'BlogLastPost',

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
.lastPost{
    margin-bottom: 150px;
    & h1{
        margin-bottom: 27px;
        font-size: 50px; 
        font-family: 'DM Serif Display'; 
        font-weight: 400; 
        line-height: 62.50px; 
        letter-spacing: 1px; 
        word-wrap: break-word;
    }
    &__boxpost{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px; 
        box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.25); 
        border-radius: 62px; 
        border: 1px #E7E7E7 solid;
        &_leftpost{
            & img{
                border-radius: 50px
            }
        }
        &_rightpost{
            width: 463px;
            margin-right: 22px;
            & h3{
                font-size: 25px; 
                font-family: 'DM Serif Display';  
                line-height: 31.25px; 
                letter-spacing: 0.50px; 
                word-wrap: break-word;
                margin-bottom: 22px;
            }
            & p{
                font-size: 22px; 
                font-family: 'Jost'; 
                font-weight: 400; 
                line-height: 33px; 
                letter-spacing: 0.22px; 
                word-wrap: break-word
            }
            &-underblockpost{
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 41px;
                justify-content: space-between;
                & img{
                    width: 6px;
                    height: 14px;
                }
                & button{
                    width: 52px;
                    height: 52px;
                    color: #292F36;
                    border-radius: 9999px;
                    border: none;
                }
                & p{
                    font-size: 16px
                }
            }
        }
    }
}



</style>