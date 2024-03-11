<template>
  <div id="app">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/cards">Voir toutes les cartes</router-link> |
    <router-link to="/sets">Voir tous les sets</router-link> |
    <router-link to="/search">Rechercher une carte</router-link> |
    <router-link to="/filter">Filtrer les cartes</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
