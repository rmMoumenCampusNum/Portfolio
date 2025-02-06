<template>
    <h1>Développeur Web en recherche d'un contrat d'apprentissage</h1>
    <div class="cv">
        <div class="contact">
            <div class="contactTitle">
                <h2>Contact</h2>
            </div>
            <div><font-awesome-icon icon="phone" class="fa-icons-contact" />
                <p>07 60 72 40 66</p>
            </div>
            <div><font-awesome-icon icon="envelope" class="fa-icons-contact" />
                <p>moumen.bourahla1@gmail.com</p>
            </div>
            <div><font-awesome-icon icon="location-dot" class="fa-icons-contact" />
                <p>Annecy, 74000</p>
            </div>
        </div>
        <div class="competences">
            <div class="competencesTitle">
                <h2>Compétences</h2>
            </div>
            <div>
                <span>Langages de programmation :</span>
                <p>JAVA, PHP, HTML / CSS / JavaScript, Kotlin, MySQL</p>
            </div>
            <div>
                <span>Frameworks :</span>
                <p>Spring Boot, Symfony, Laravel, VueJS, Jetpack Compose</p>
            </div>
        </div>
        <div>
            <div class="softsSkills">
                <h2>Softs Skills</h2>
                <div class="softsSkillsList">
                    <div>
                        <ul>
                            <li>Esprit Logique</li>
                            <li>Autonomie</li>
                            <li>Créativité</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Résolution de problèmes</li>
                            <li>Communication</li>
                            <li>Ouverture d'esprit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="centresInteret">
                <div class="centresInteretTitle">
                    <h2>Centres d'Intérêts</h2>
                </div>
                <div class="centresInteretList">
                <div>
                    <ul>
                        <li>Cinéma</li>
                        <li>Art</li>
                        <li>Animaux</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Dessin</li>
                        <li>Lecture</li>
                        <li>Technologie</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div class="experiencesPro">
            <div class="experiencesProTitle">
                <h2>Expériences Professionnelles</h2>
            </div>
            <span>Agent de Logistique - Hôpital d'Annecy</span>
            <p>2020 - 2023</p>
            <p>Gestion des stocks - Organisation des plannings - Transport de médicaments - Contrôle qualité des
                réceptions - Préparation de commandes</p>
            <span>Magasinier - Conforama</span>
            <p>2019 - 2020</p>
            <p>Conseil client - Acheminement des commandes aux clients - Réapprovisionnement des rayons</p>
        </div>
    <div class="formations">
        <h2>Formations</h2>
        <span>2024 - 2026 - BAC + 3 Concepteur Développeur d'Applications</span>
        <p>2024 : Première année de formation en présentiel</p>
        <span>2016 - 2019 - BAC PRO Commerce </span>
    </div>

    </div>
    <font-awesome-icon icon="download" class="fa-icon-dl" @click="downloadPdf" />
</template>

<script>
export default {
    methods: {
        downloadPdf() {
            const pdfUrl = "../public/MoumenCV.pdf";
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'MoumenCV.pdf'; // Nom du fichier téléchargé
            link.click();
        },
    },
};
</script>

<style scoped>
h1 {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 3em;
    text-align: center;
}

span {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.5em;
    font-weight: bold;
}

.cv {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    width: 60%;
    left: 20%;
    flex-shrink: 25;
}

.cv > *:last-child:nth-child(odd){
    margin: 0 auto;
}

h2 {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 3em;
    text-align: center;
    border-bottom: solid darkviolet;
    width: 100%;
}

p {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.5em;
}


.contact div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
}

.contact div p {
    width: 100%;
    text-align: center;
}

.fa-icons-contact {
    color: white;
    font-size: 2em;
}


.fa-icon-dl {
    display: flex;
    justify-content: center;
    color: white;
    font-size: 2em;
    width: 100%;
}

.competences {
    display: flex;
    flex-direction: column;
}



.softsSkills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
}


.softsSkillsList {
    display: flex;
}

.softsSkills ul,
li {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.2em;
    text-align: center;
    list-style: none;
}

.experiencesPro {
    width: 523px;
}



.centresInteretList {
    display: flex;
    justify-content: center;
}

.centresInteret ul,
li {
    color: white;
    font-family: "Afacad Flux", sans-serif;
    font-size: 1.2em;
    text-align: center;
    list-style: none;
}



</style>