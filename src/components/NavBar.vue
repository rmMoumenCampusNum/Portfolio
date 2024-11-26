<template>
    <transition name="fade">
<div v-if="isVisible" class="navBar">
<ul>
  <router-link to="/contact"><li>Contact</li></router-link>
  <router-link to="/cv"><li>CV</li></router-link>
  <router-link to="/projets"><li>Projets</li></router-link>
  <router-link to="/technos"><li>Technos</li></router-link>
</ul>
</div>
</transition>
</template>

<script>

export default {
data() {
  return {
    isVisible: false, // Cache l'élément par défaut
  };
},
mounted() {
  // Rend l'élément visible dès que le composant est monté
  this.isVisible = true;
},
};</script>

<style scoped>
.navBar{
  border-bottom: solid darkviolet;
  border-right: solid darkviolet;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 78px;
}

.navBar a {
  text-decoration: none;
  color: inherit; /* Prend la couleur du parent */
}

.navBar li{
width: 150px;
text-align: center;
border-radius: 10px;
}

.navBar li:hover {
  border-top: 2px solid darkviolet;
  border-left: 2px solid darkviolet;
  cursor: pointer;
  overflow: auto;
}

.navBar ul{
  color: white;
  font-family: "Afacad Flux", sans-serif;
  font-size: 2rem;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s ease; /* Durée de 3s pour la transition */
}
.fade-enter-from, .fade-leave-to {
  opacity: 0; /* L'élément est invisible avant l'animation */
}


</style>