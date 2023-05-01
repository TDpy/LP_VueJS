<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    alert(
      "Note : \n" +
        "Certains films sont présents afin de tester plus facilement. Vous pouvez intéragir avec ces derniers. " +
        "\n\nSi vous modifiez la liste, rafraichir la page remettra la liste par défaut."
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
