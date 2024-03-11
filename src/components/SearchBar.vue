<template>
    <div>
      <input type="text" v-model="searchQuery" @input="searchCards" placeholder="Rechercher par nom...">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      searchCards() {
        this.$emit('search', this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  