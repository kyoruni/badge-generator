<template>
  <div class="header-menu">
    <v-app-bar dark flat :color="mainColor">
      <v-app-bar-title>
        Badge Generator
      </v-app-bar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    mainColor () {
      return '#93b6e8'
    }
  }
}
</script>