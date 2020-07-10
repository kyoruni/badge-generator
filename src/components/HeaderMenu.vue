<template>
  <div class="header-menu">
    <v-app-bar dark flat dense :color="mainColor">
      <v-toolbar-title>
        Badge Generator
      </v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="aboutButton()">
        <v-icon>fas fa-question-circle</v-icon>
      </v-btn>
      <about ref="dialog"/>
    </v-app-bar>
  </div>
</template>

<script>
import About from '@/components/About'

export default {
  computed: {
    mainColor () {
      return '#93b6e8'
    }
  },
  components: {
    About,
  },
  methods: {
    aboutButton () {
      this.$refs.dialog.open()
    }
  }
}
</script>