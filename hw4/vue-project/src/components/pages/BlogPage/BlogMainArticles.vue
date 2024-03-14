<template>
    <div class="mainblockblog center"> 
        <div class="mainblockblog__title">
            <h1>Articles & News</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="mainblockblog__column">
            <div v-for="article in articles" :key="article.id" class="mainblockblog__column_cardblog">
                <div class="mainblockblog__column_cardblog-imgblog">
                    <img :src="require('../../../assets/images/' + article.image)"  alt="cardblog-1">
                    <p class="mainblockblog__column_cardblog-spanp">{{article.imgText}}</p>
                    <h1>{{article.itemTitle}}</h1>
                </div>
                <div class="mainblockblog__column_cardblog-p">
                    <p>{{article.itemData}}</p>
                    <button><img src="../../../assets/images/simvol.svg" alt="mainBTN">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WorkspaceJsonBlogMainArticles',

  data() {
    return {
        articles: [
          {
             image: "cardBlog1.svg",
             imgText: "Kitchan Design",
             itemTitle: "Let’s Get Solution For Building Construction Work",
             itemData: "26 December,2022"
          },
          {
             image: "cardBlog2.svg",
             imgText: "Living Design",
             itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
             itemData: "22 December,2022"
          },
          {
             image: "cardBlog3.svg",
             imgText: "Interior Design",
             itemTitle: "Best For Any Office & Business Interior Solution",
             itemData: "25 December,2022"
          },
          {
             image: "cardBlog4.svg",
             imgText: "Kitchan Design",
             itemTitle: "Let’s Get Solution For Building Construction Work",
             itemData: "26 December,2022"
          },
          {
             image: "cardBlog5.svg",
             imgText: "Living Design",
             itemTitle: "Low Cost Latest Invented Interior Designing Ideas.",
             itemData: "22 December,2022"
          },
          {
             image: "cardBlog6.svg",
             imgText: "Interior Design",
             itemTitle: "Best For Any Office & Business Interior Solution",
             itemData: "25 December,2022"
          },
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
.mainblockblog{
    margin-bottom: 96px;
    &__title{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 52px;
        & h1{
            text-align: center;
            width: 1200px;
            font-size: 50px;
             font-family: 'DM Serif Display';
              font-weight: 400;
               line-height: 62.50px; 
               letter-spacing: 1px; 
               word-wrap: break-word;
        }
        & p{
            text-align: center;
            width: 820px;
            font-size: 22px; 
            font-family: Jost; 
            font-weight: 400; 
            line-height: 33px; 
            letter-spacing: 0.22px; 
            word-wrap: break-word;
        }
    }
    &__column{
        display: grid;
        grid-template-columns: 382px 382px 382px;
        justify-content: space-between;
        grid-template-rows: 521px;
        gap:30px;
        margin-bottom: 51px;
        &_cardblog{
            border-radius: 62px;
            border: 1px #E7E7E7 solid;
            &:hover{
                background-color: #F4F0EC;
                & button {
                    background-color: white;
                }
            }
            &-imgblog{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                position: relative;
                & img{
                    margin-top: 21px;
                    border-top-left-radius: 45px; 
                    border-top-right-radius: 45px;
                    margin-bottom: 21px;
                }
                & h1{
                    width: 340px;
                    height: 70px; 
                    color: #292F36; 
                    font-size: 25px; 
                    font-family: 'DM Serif Display';
                    font-weight: 400; 
                    line-height: 31.25px; 
                    word-wrap: break-word;
                    margin-bottom: 30px;
                }
            }
            &-spanp{
                width: 124px;
                position: absolute;
                top: 253px;
                left: 32px;
                border-radius: 8px 8px 8px 0px;
                background: #fff;
                padding: 3.5px 0px;
                color: #4d5053;
                font-family: "Jost";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.16px;
                text-transform: capitalize;
                text-align: center;
                vertical-align: middle;
                
            }
            &-p{
                display: flex;
                align-items: center;
                justify-content: space-around;
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
                    width: 223px; 
                    height: 33px; 
                    color: #4D5053; 
                    font-size: 16px; 
                    font-family: 'Jost'; 
                    font-weight: 400; 
                    text-transform: capitalize; 
                    line-height: 24px; 
                    word-wrap: break-word;
                }
                & button:active{ 
                    transform: scale(0.98); 
                    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24); 
                } 
            }
        }
    }   
}


</style>