<template>
    <div>
      <h1>Rechercher une carte</h1>
      <input type="text" v-model="searchTerm" @input="searchCard" placeholder="Entrez le nom de la carte">
      <ul>
        <li v-for="card in searchResults" :key="card.id">
          {{ card.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchCard',
    data() {
      return {
        searchTerm: '',
        searchResults: []
      };
    },
    methods: {
      async searchCard() {
        try {
          const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${this.searchTerm}`);
          const data = await response.json();
          this.searchResults = data.cards;
        } catch (error) {
          console.error('Error searching for card:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  