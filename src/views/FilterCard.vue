<template>
    <div>
      <h1>Filtrer les cartes</h1>
      <select v-model="selectedColor" @change="filterCards">
        <option value="">Sélectionner une couleur</option>
        <option value="W">Blanc</option>
        <option value="U">Bleu</option>
        <option value="B">Noir</option>
        <option value="R">Rouge</option>
        <option value="G">Vert</option>
      </select>
      <ul>
        <li v-for="card in filteredCards" :key="card.id">
          {{ card.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterCard',
    data() {
      return {
        selectedColor: '',
        filteredCards: []
      };
    },
    methods: {
      async filterCards() {
        try {
          let apiUrl = 'https://api.magicthegathering.io/v1/cards';
          if (this.selectedColor) {
            apiUrl += `?colors=${this.selectedColor}`;
          }
          const response = await fetch(apiUrl);
          const data = await response.json();
          this.filteredCards = data.cards;
        } catch (error) {
          console.error('Error filtering cards:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  