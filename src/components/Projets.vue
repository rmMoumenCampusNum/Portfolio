<template>
  <transition name="fade">
    <div v-if="isVisible">
      <h1>Projets Réalisés</h1>
      <div class="cardsProjets">
        <div v-for="project in projects" :key="project.name" class="projets">
          <p>{{ project.name }}</p>
          <p>{{ project.description }}</p>
          <a target="_blank" :href="project.lien"><p>GitHub</p></a>
          <img :src="getImage(project.image)" alt="Projet">
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "REZ GAMES",
                    description: "Site e-commerce de jeux-vidéos retro et de pièces de collection",
                    lien: "https://github.com/rmMoumenCampusNum/REZ_GAMES",
                    image:"rezGames.png"
                }, {
                    name: "FindMyCar",
                    description: "Site de location de voitures (microservice 'users')",
                    lien: "https://github.com/rmMoumenCampusNum/microservice-users",
                    image: "findMyCar.png"
                },{
                    name: "Dungeons and Dragons",
                    description: "Projet JAVA de Donjons et Dragons en ligne de commande",
                    lien:"https://github.com/rmMoumenCampusNum/Dungeons-Dragons",
                    image: "donjonDragon.png"
                }
            ],
            isVisible: false
        };
        
    },
    methods: {
        getImage(imageName) {
            return new URL(`../assets/${imageName}`, import.meta.url).href;
        }
    },
    mounted() {
  
  this.isVisible = true;
}
}
</script>

<style scoped>

h1 {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 4em;
    text-align: center;
}

.cardsProjets {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

.projets {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 410px;
    border-bottom: 4px solid #ffffff90;
    border-right: 4px solid #ffffff90;
    box-shadow: 10px 10px 50px #9400d3;
    border-radius: 10px;
    overflow: hidden;
}

.projets:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.projets img {
    width: 100%;
    height: 100%;
}

.projets a {
    text-decoration: none;
}

.cardsProjets p {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.5em;
    text-align: center;
    padding: 5px;
}


</style>