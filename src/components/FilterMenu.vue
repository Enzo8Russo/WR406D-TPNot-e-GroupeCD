<template>
    <div>
      <select v-model="selectedColor" @change="filterByColor">
        <option value="">Tous les couleurs</option>
        <option v-for="color in colors" :key="color">{{ color }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterMenu',
    props: ['colors'],
    data() {
      return {
        selectedColor: '',
      };
    },
    methods: {
      filterByColor() {
        this.$emit('filter', this.selectedColor);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  