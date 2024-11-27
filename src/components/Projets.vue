<template>
    <h1>Projets Réalisés</h1>
    <div class="cardsProjets">
    <div v-for:="project in projects" class="projets">
        <p>{{project.name}}</p>
        <p>{{project.description}}</p>
        <a target="_blank" :href="project.lien"><p>Ici</p></a>
        <img :src="getImage(project.image)" alt="Projet">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "REZ GAMES",
                    description: "Site e-commerce de jeux-vidéos retro et pièces de collection",
                    lien: "https://github.com/rmMoumenCampusNum/REZ_GAMES",
                    image:"rezGames.png"
                }, {
                    name: "FindMyCar",
                    description: "Site microservice de location de voitures (microservice 'users')",
                    lien: "https://github.com/rmMoumenCampusNum/microservice-users",
                    image: "findMyCar.png"
                },{
                    name: "Dungeons and Dragons",
                    description: "Projet JAVA de Donjons et Dragons en ligne de commande",
                    lien:"https://github.com/rmMoumenCampusNum/Dungeons-Dragons",
                    image: "donjonDragon.png"
                }
            ]
        };
    },
    methods: {
        getImage(imageName) {
            return new URL(`../assets/images/${imageName}`, import.meta.url).href;
        }
    }
}
</script>

<style>

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
}

.projets img {
    width: 400px;
    height: 400px;
}

p {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.5em;
    text-align: center;
}

</style>