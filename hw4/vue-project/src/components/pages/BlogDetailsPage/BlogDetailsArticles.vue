<template>
    <div class="blog-details__wrap center">
        <div class="blog-details">
          <div class="article"  v-for="article in filterArticle" :key="article.id">
             <h2 class="article__title">{{ article.title }}</h2>
             <img :src="require('../../../assets/images/' + article.img)" :alt="article.img" class="article__img">
             <div class="article__info">
                <p class="article__info-data">26 December,2022</p>
                <p class="article__info-link">Interior / Home / Decore</p>
             </div>
             <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
             <br>
             <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
             <div class="info-blok">
                <p class="info-blok__quotation-marks">&#8221;</p>
                <p class="info-blok__text">The details are not the details. They make the design.</p>
             </div>
             <h2 class="article__title">Design sprints are great</h2>
             <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p>
             <div class="article__list">
                <div class="article__list-num">
                   <p class="article__list-num-text">1</p>
                   <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-num">
                   <p class="article__list-num-text">2</p>
                   <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-num">
                   <p class="article__list-num-text">3</p>
                   <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
             </div>
             <img class="article__img" src="../../../assets/images/blogdetailsmaindown.svg" alt="blogdetailsmaindown.svg">
             <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
          </div>
       </div>
       
       <div class="tags">
          <div class="tags__buttons-wrap">
             <h2 class="tags__title">Tags</h2>
             <div class="tags__buttons">
                <button v-for="(btn, index) in buttonList" @click="filterClick(btn)" class="tags__buttons-item" :key="index">{{ btn }}</button>
             </div>
          </div>
       </div>
 
    </div>
</template>

<script>
export default {
  name: 'BlogDetailsArticles',

  data() {
    return {
        findelement: '',
        restart:[
            {
                id: 0,
                title: "Let’s Get Solution for Building Construction Work",
                img: "blogdetailsmainup.svg",
                tag: "Kitchen"
            }
        ],
        contentsArticles: [
            {
                id: 0,
                title: "Let’s Get Solution for Building Construction Work",
                img: "blogdetailsmainup.svg",
                tag: "Kitchen"
            },
            {
                id: 1,
                title: "Low Cost Latest Invented Interior Designing Ideas.",
                img: "bedroomblogdetails.jpg",
                tag: "Bedroom"
            },
            {
                id: 2,
                title: "Best For Any Office & Business Interior Solution",
                img: "image_3.jpg",
                tag: "Building"
            },
        ],
        buttonList: [
            "Kitchen",
            "Bedroom",
            "Building",
            "Architecture",
            "Kitchen Planning",
            "Bedroom"
        ]
    }  
},


    mounted() {
        
    },

    methods: {
        filterClick(item) {
            this.findelement = item;
        }
    },
    computed: {
        filterArticle() {
            return this.findelement ? this.contentsArticles.filter((el) => el.tag.includes(this.findelement)) : this.restart
        }
    },
};
</script>

<style lang="scss" scoped>

.blog-details__wrap {
    margin-top: 200px;
    display: flex;
    gap: 52px;
    margin-bottom: 96px
}

.blog-details {
    width: 800px;   
}

.tags {

    &__buttons-wrap {
        width: 345px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    &__title {
        color: #292f36;
        font-family: "DM Serif Display";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
    }
    &__buttons {
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 10px;
        &-item {
            cursor: pointer;
            background: #f4f0ec;
            padding-top: 9px;
            padding-bottom: 9px;
            border-radius: 10px;
            border: none;
            color: #292f36;
            text-align: center;
            font-family: "Jost";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.36px;
        }
    }   
}    

.article {
    
    &__title {
        color: #292f36;
        font-family: "DM Serif Display";
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 20px;
        margin-top: 0;
    }
    &__img {
        margin-top: 21px;
        margin-bottom: 35px;
        border-radius: 50px;
        width: 800px;
    }
    &__info {
        margin-top: 11px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        margin-bottom: 46px;
        color: #4d5053;
        font-family: "Jost";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
    &__text {
        color: #4d5053;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
    &__list {
        margin-top: 24px;
        margin-bottom: 23px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 732.389px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        gap: 32px;
        list-style-position: 10px 0;

        &-num {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
                -ms-flex-align: start;
                    align-items: flex-start;
            gap: 14px;
            &-text {
                color: #cda274;
                font-family: "DM Serif Display";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 0.4px;
            }
        }
        &-item {
            color: #4d5053;
            font-family: "Jost";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
        }
    }
}

.info-blok {
    margin-bottom: 27px;
    margin-top: 35px;
    padding: 53px 227px;
    background: #f4f0ec;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &__quotation-marks {
        width: 106px;
        height: 133px;
        flex-shrink: 0;
        color: #cda274;
        text-align: center;
        font-family: "DM Serif Display";
        font-size: 200px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 4px;
        margin: 0;
    }
    &__text {
        color: #cda274;
        text-align: center;
        font-family: "Jost";
        font-size: 25px;
        font-style: italic;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
        margin: 0;
    }
}
</style>