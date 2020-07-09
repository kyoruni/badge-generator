<template>
  <v-app>
    <header-menu/>
    <v-container>
      <v-row>
        <v-col cols="10" offset="1" md="4" offset-md="4">
          <generator/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Generator from '@/components/Generator'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    Generator,
  },
}
</script>

<style>
.v-application code {
  all: unset;
}

pre {
  white-space: pre-line;
}
</style>
