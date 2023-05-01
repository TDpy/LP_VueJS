<template>
  <div>
    <header>
      <h1>Détails du film</h1>

      <div class="buttonsArea">
        <button @click="back">Retour</button>
        <button @click="edit">Editer</button>
        <button @click="deleteMovie">Supprimer</button>
      </div>
    </header>

    <main>
      <div class="filmDetails">
        <div class="filmPhoto">
          <img v-if="film.photo" :src="film.photo" alt="" />
        </div>

        <div class="filmInfo">
          <h1>{{ film.titre }}</h1>
          <p><strong>Année de sortie:</strong> {{ film.annee }}</p>
          <p><strong>Genre du film:</strong> {{ film.genre }}</p>
          <p><strong>Langue:</strong> {{ film.langue }}</p>
          <p><strong>Réalisateur:</strong> {{ film.realisateur.nom }}</p>
          <p>Nationalité: {{ film.realisateur.pays }}</p>
          <p>Date de naissance: {{ film.realisateur.date_naissance }}</p>
        </div>
      </div>
    </main>
  </div>
</template>


    <script>
import router from "@/router";
import filmsJSON from "../movies.json";

export default {
  data() {
    return {
      film: {
        id: "",
        titre: "",
        annee: "",
        langue: "",
        genre: "",
        realisateur: {
          nom: "",
          pays: "",
          date_naissance: "",
        },
        photo: "",
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.film = filmsJSON.find((film) => film.id === parseInt(id));
  },
  methods: {
    back() {
      router.push("/");
    },
    edit() {
      router.push(`/movie/${this.$route.params.id}/edit`);
    },
    deleteMovie() {
      const index = filmsJSON.findIndex(
        (film) => film.id === parseInt(this.$route.params.id)
      );
      if (index !== -1) {
        filmsJSON.splice(index, 1);
      }
      router.push("/");
    },
  },
};
</script>

  <style>
body {
  background: rgb(223, 223, 223);
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.buttonsArea {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 80vw;
  gap: 20px;
}

.filmDetails {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.filmPhoto {
  flex: 1;
}

.filmPhoto img {
  max-width: 100%;
  height: auto;
}

.filmInfo {
  flex: 2;
  padding-left: 30px;
}

.filmInfo h1 {
  margin-top: 0;
}

.filmInfo p {
  margin: 10px 0;
  font-size: 1.2rem;
}
</style>
