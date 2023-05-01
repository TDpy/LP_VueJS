<template>
  <div>
    <header>
      <h1>Enregistrer un film</h1>

      <div class="buttonsArea">
        <button @click="back">Retour</button>
        <button @click="create">Ajouter</button>
      </div>
    </header>

    <form>
      <label for="title">Titre :</label>
      <input type="text" id="title" v-model="film.titre" />

      <label for="release-date">Date de sortie :</label>
      <input type="date" id="release-date" v-model="film.annee" />

      <label for="language">Langue :</label>
      <input type="text" id="language" v-model="film.langue" />

      <label for="genre">Genre :</label>
      <input type="text" id="genre" v-model="film.genre" />

      <label for="director-name">Nom du réalisateur :</label>
      <input type="text" id="director-name" v-model="film.realisateur.nom" />

      <label for="director-birthdate">Date de naissance du réalisateur :</label>
      <input
        type="date"
        id="director-birthdate"
        v-model="film.realisateur.date_naissance"
      />

      <label for="director-nationality">Nationalité du réalisateur :</label>
      <input
        type="text"
        id="director-nationality"
        v-model="film.realisateur.pays"
      />

      <label for="photo-url">URL de la photo :</label>
      <input type="url" id="photo-url" v-model="film.photo" />
    </form>
  </div>
</template>


      <script>
import router from "@/router";
import filmsJSON from "../movies.json";

export default {
  data() {
    return {
      film: {
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
  methods: {
    back() {
      router.push("/");
    },
    create() {
      const dernierId = filmsJSON[filmsJSON.length - 1].id;
      const nouveauFilm = {
        id: dernierId + 1,
        titre: this.film.titre,
        annee: this.film.annee,
        langue: this.film.langue,
        genre: this.film.genre,
        realisateur: {
          nom: this.film.realisateur.nom,
          date_naissance: this.film.realisateur.date_naissance,
          pays: this.film.realisateur.pays,
        },
        photo: this.film.photo,
      };

      filmsJSON.push(nouveauFilm);
      this.$router.push("/");
    },
  },
};
</script>

    <style scoped>
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 1rem;
}

input[type="text"],
input[type="date"],
input[type="url"] {
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 20rem;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="url"]:focus {
  outline: none;
  border-color: #6b9;
}
</style>
