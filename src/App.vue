<template>
<NavBar/>
<transition name="fade">
<div v-if="isVisible" class="setTitle">
  <RouterLink to="/" class="titleLink">
<h1>
<span class="left">Portfolio</span>
<span class="right">Moumen</span>
</h1>
</RouterLink>
</div>
</transition>
<transition name="fade">
<router-view/>
</transition>
</template>

<script>

import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Presentation from './components/Presentation.vue';

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

components: {
  NavBar,
  Presentation,
},
};

</script>

<style scoped>

.setTitle {
  display: flex;
  justify-content: center;
  width: 100%;
}

a {
  text-decoration: none;

}

.setTitle h1 {
  color: white;
  font-family: "Afacad Flux", sans-serif;
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 700px;
  border: solid;
  border-color: darkviolet;
  border-radius: 10px;
  box-shadow: 10px 10px 50px darkviolet;
}

.left {
  align-self: flex-start;
  margin:10px;
  margin-left: 100px;

}

.right {
  align-self: flex-end;
  margin:10px;
  margin-right: 100px;
}

.fade-enter-active {
  transition: opacity 1s ease; /* Durée de 1s pour la transition */
}

.fade-enter-from, .fade-leave-to {
  opacity: 0; /* L'élément est invisible avant l'animation */
}


</style>
