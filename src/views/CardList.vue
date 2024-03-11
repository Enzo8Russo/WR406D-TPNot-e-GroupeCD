<template>
    <div>
      <h1>Liste des cartes</h1>
      <ul>
        <li v-for="card in cards" :key="card.id">
          {{ card.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardList',
    data() {
      return {
        cards: []
      };
    },
    mounted() {
      this.fetchCards();
    },
    methods: {
      async fetchCards() {
        try {
          const response = await fetch('https://api.magicthegathering.io/v1/cards');
          const data = await response.json();
          this.cards = data.cards;
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  