<template>
  <v-app>
    <header-menu/>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="10" md="6" class="content-wrapper">
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

<style scoped>
.content-wrapper {
  margin: 0 auto;
}
</style>

<style>
/* ボタンが勝手に大文字になるので解除 */
.v-btn {
  text-transform: none;
}
</style>
