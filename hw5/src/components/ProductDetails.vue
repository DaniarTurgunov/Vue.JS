<template>
  <div class="MainProducts">
    <h1>Catalog</h1>
    <div class="MainProducts__currency">
      <h3>Setup Currency: </h3>
      <select size="1" name="" id="" v-model="currency">
        <option>₽</option>
        <option>€</option>
        <option>$</option>
      </select>
    </div>
    <br><br><br>
    <div class="MainProducts__cards">
        <div v-for="product in products" :key="product.id" class="MainProducts__cards-card">
          <img :src="require('../assets/' + product.img)"  alt="products">
          <p>Name: {{ product.name }}</p>
          <p>Cost: {{ formattedPrice(product.price) }}</p>
          <p v-if="product.available">Available</p>
          <p v-else> Out of stock</p>
          <br>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data() {
    return {
      currency: '',
      price: '',
      products:[{
        id: 0,
        img:'apple.jpg',
        name: 'Apple',
        price: 100,
        available: true,
      },
      {
        id: 1,
        img:'banana.jpg',
        name: 'Banana',
        price: 160,
        available: true,
      },
      {
        id: 2,
        img:'watermelon.jpg',
        name: 'Watermelon',
        price: 350,
        available: false,
      }
    ],
    };
    
  },

  mounted() {
    
  },

  methods: {

  },

  computed: {
    formattedPrice(){
      if(this.currency === "₽"){
        return price => `${price} ₽`
      } else if (this.currency === '$'){
        return price => `$ ${(price / 91.87).toFixed(2)}`
      }else{
        return price => `€ ${(price / 99.97).toFixed(2)}`
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.MainProducts{
  &__currency{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    & select{
      width: 40px;
      height: 25px;
      text-align: center;
    }
  }
  
  &__cards{
    display: grid;
    justify-items: center;
    grid-template-columns: 250px 250px 250px;
    justify-content: center;
    gap: 15px;
    &-card{
      border-radius: 25px;
      border: 1px solid black;
      & img{
      width: 200px;
      height: 180px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom: 1px solid black;
      }

    }
    
  }
}

</style>