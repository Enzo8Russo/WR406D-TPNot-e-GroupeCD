<template>
    <div>
      <div v-for="card in filteredCards" :key="card.id">
        <h3>{{ card.name }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardList',
    props: ['cards', 'sets', 'filteredCards'],
  };
  </script>
  
  <style scoped>
  </style>
  