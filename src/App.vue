<template>
  <div id="app">
    <header-menu/>
    <generator/>
    hoge
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Generator from '@/components/Generator'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    Generator,
  }
}
</script>
