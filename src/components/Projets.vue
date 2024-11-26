<template>
    <h1>Projets Réalisés</h1>
    <div v-for:="project in projects">
        <p>{{project.name}}</p>
        <p>{{project.description}}</p>
        <a target="_blank" :href="project.lien"><p>Ici</p></a>
        <img :src="project.image" alt="Projet">
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
                    image:"/images/rezGames.png"
                }, {
                    name: "FindMyCar",
                    description: "Site microservice de location de voitures (microservice 'users')",
                    lien: "https://github.com/rmMoumenCampusNum/microservice-users",
                    image: ""
                },{
                    name: "Dungeons and Dragons",
                    description: "Projet JAVA de Donjons et Dragons en ligne de commande",
                    lien:"https://github.com/rmMoumenCampusNum/Dungeons-Dragons",
                    image: "/images/donjonDragon.png"
                }
            ]
        };
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
</style>