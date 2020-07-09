<template>
  <v-app-bar dark flat :color="mainColor">
    <v-toolbar-title>
      Badge Generator
    </v-toolbar-title>
  </v-app-bar>
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