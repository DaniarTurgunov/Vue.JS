<template>
    <div class="counter">
        <div class="counter__column center">
            <div class="counter__column-bottom">
                <div class="counter__column-bottom-case line">
                    <h3 id="case1">12</h3>
                    <p>Years Of Experiance</p>
                </div>
                <div class="counter__column-bottom-case line" >
                    <h3 id="case2">85</h3>
                    <p>Success Project</p>
                </div>
                <div class="counter__column-bottom-case line">
                    <h3 id="case3">15</h3>
                    <p>Active Project</p>
                </div>
                <div class="counter__column-bottom-case">
                    <h3 id="case4">95</h3>
                    <p>Happy CUstomers</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainPageCounter',

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

.counter {
    background-color: #F4F0EC;
    margin-bottom: 96px;
    &__column{
        &-bottom{
            height: 457px;
            display: grid;
            justify-items: center;
            grid-template-columns: auto auto auto auto;
            align-items: center;
            justify-content: space-evenly;

            &-case{
                height: 140px;
                & h3{
                    color: #CDA274;
                    font-size: 85px; 
                    font-family: 'DM Serif Display'; 
                    font-weight: 400; 
                    line-height: 106.25px; 
                    letter-spacing: 1.70px; 
                    word-wrap: break-word;
                    text-align: center;
                    margin:0;
                }
                & p{
                    font-size: 22px; 
                    font-family: 'Jost';
                    font-weight: 400; 
                    line-height: 33px; 
                    letter-spacing: 0.22px; 
                    word-wrap: break-word;
                    margin:0;
                }
            }
        }
    }
}

.line{
    padding-right: 54px;
    border-right: #CDA274 solid;
}
.center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
}

</style>