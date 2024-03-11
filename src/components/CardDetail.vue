<template>
    <div>
      <h1>{{ card.name }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardDetail',
    props: ['card'],
  };
  </script>
  
  <style scoped>
  </style>
  