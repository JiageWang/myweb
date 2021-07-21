<template>
  <div id="nav">
    <nav-menu/>
  </div>
  <router-view/>
</template>

<script>
  import NavMenu from "@/components/content/navmenu/NavMenu";

  export default {
    name: "App",
    components: {
      NavMenu
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
