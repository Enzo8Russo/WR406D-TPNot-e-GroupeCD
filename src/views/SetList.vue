<template>
    <div>
      <h1>Liste des ensembles</h1>
      <ul>
        <li v-for="set in sets" :key="set.code">
          {{ set.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SetList',
    data() {
      return {
        sets: []
      };
    },
    mounted() {
      this.fetchSets();
    },
    methods: {
      async fetchSets() {
        try {
          const response = await fetch('https://api.magicthegathering.io/v1/sets');
          const data = await response.json();
          this.sets = data.sets;
        } catch (error) {
          console.error('Error fetching sets:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  