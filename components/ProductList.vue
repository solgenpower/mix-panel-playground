<template>
  <div class="products-container">
    <div v-for="product in products" >
      <div class="card">
        <img :src="product.image" :alt="product.name">
        <div class="card-body">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <strong>${{ product.price }}</strong>
        </div>
        <div class="card-footer">
          <button v-track:click="product" data-mp-action="add to cart" class="button"> Add To Cart</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// generate random id


const products = [
  {
    id: 1,
    name: 'Product 1',
    sku: 'sku-1',
    price: 100,
    image: 'https://picsum.photos/300?random=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    id: 2,
    name: 'Product 2',
    sku: 'sku-2',
    price: 200,
    image: 'https://picsum.photos/300?random=2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },

  {
    id: 3,
    name: 'Product 3',
    sku: 'sku-3',
    price: 300,
    image: 'https://picsum.photos/300?random=3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },

  {
    id: 4,
    name: 'Product 4',
    sku: 'sku-4',
    price: 400,
    image: 'https://picsum.photos/300?random=4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },

  {
    id: 5,
    name: 'Product 5',
    sku: 'sku-5',
    price: 500,
    image: 'https://picsum.photos/300?random=5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
]


</script>

<style>

.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: auto;
  max-width: 1200px;

}
.card {
  width: 450px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-body {
  padding: 10px;
}
.card-footer {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.button {
  padding: 10px 20px;
  background-color: #009985;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

