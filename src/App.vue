<template>
  <v-app>
    <header-menu/>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3" style="background: aqua;">
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
