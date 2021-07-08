<template>
  <div id="app">
    <!--Navbar Here -->
    <div>
      <nav>
        <div class="header">
          <h3>Geocoder</h3>
        </div>
      </nav>
    </div>
    <!--Index Page Here -->
    <Index />
  </div>
</template>
<script>
import Index from "../components/Index.vue";
export default {
  name: "App",
  components: {
    Index,
  },
};
</script>