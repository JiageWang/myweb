<template>
  <div class="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import MyHeader from "src/components/MyHeader";
  import MyFooter from "src/components/MyFooter";
  import MyMain from "src/components/MyMain";

  export default {
    name: "App",
    components: {
      MyHeader,
      MyMain,
      MyFooter
    }
  }
</script>


<style>

#nav {
  padding-bottom: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
