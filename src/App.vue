<template>
<NavBar/>
<transition name="fade">
<div v-if="isVisible" class="setTitle">
<h1>
<span class="left">Portfolio</span>
<span class="right">Moumen</span>
</h1>
</div>
</transition>
<Presentation/>
<RouterView/>
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
h1 {
  color: white;
  font-family: "Afacad Flux", sans-serif;
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease; /* Durée de 2s pour la transition */
}
.fade-enter-from, .fade-leave-to {
  opacity: 0; /* L'élément est invisible avant l'animation */
}

.presentation {
  display: flex;
  justify-content: center;
  color: white;
}

</style>
