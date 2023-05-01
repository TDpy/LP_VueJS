<template>
  <div>
    <header>
      <h1>Liste de films</h1>

      <div class="buttonsArea">
        <div id="searchBox">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Recherchez par titre, année ou réalisateur"
            @keyup="filterFilms"
          />
          <button @click="filterFilms">Rechercher</button>
        </div>
        <button @click="clearSearch">Réinitialiser</button>
        <button @click="addMovie">Ajouter</button>
      </div>
    </header>

    <div id="filmsList">
      <div class="card" v-for="film in films" :key="film.id">
        <router-link :to="'/movie/' + film.id">
          <div class="photo">
            <img v-if="film.photo" :src="film.photo" alt="" />
            <img v-else src="../img/no_picture.png" alt="" srcset="" />
          </div>
          <div class="infosFilm">
            <h2>
              {{ film.titre }} <i>({{ new Date(film.annee).getFullYear() }})</i>
            </h2>
            <p>{{ film.realisateur.nom }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


  <script>
import filmsJSON from "../movies.json";
import router from "@/router";

export default {
  data() {
    return {
      films: filmsJSON,
      searchTerm: "",
    };
  },
  methods: {
    filterFilms() {
      const searchTerm = this.searchTerm.toLowerCase();
      this.films = filmsJSON.filter((film) => {
        const titre = film.titre.toLowerCase();
        const annee = film.annee.toString();
        const realisateur = film.realisateur.nom.toLowerCase();
        return (
          titre.includes(searchTerm) ||
          annee.includes(searchTerm) ||
          realisateur.includes(searchTerm)
        );
      });
    },
    clearSearch() {
      this.searchTerm = "";
      this.films = filmsJSON;
    },
    addMovie() {
      router.push("/movie/create");
    },
  },
};
</script>

<style>
body {
  background: rgb(223, 223, 223);
}
#filmsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.card {
  width: calc(25% - 20px);
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.card .photo {
  width: 100%;
  height: 300px;
  max-height: 20vh;
  background-color: #eee;
  overflow: hidden;
}

img {
  width: 100%;
}

.card .infosFilm {
  padding: 20px;
}

.card h2 {
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

.card p {
  margin: 0;
  font-size: 1em;
  color: #555;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80vw;
}

#searchBox {
  display: flex;
  align-items: center;
}

#searchBox input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 500px;
}

#searchBox button {
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

#searchBox button:hover {
  background-color: #0062cc;
}

.buttonsArea button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.buttonsArea button:hover {
  background-color: #0062cc;
}

a {
  text-decoration: none;
}
a:visited {
  color: blue;
}
</style>
