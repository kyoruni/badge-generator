<template>
  <div class="preview-icon">
    <div class="text-center mt-2">
      <div v-html="imgTAG" class="aiueo"/>
      <v-card outlined color="#f0f0f0" class="text-left mt-2">
        <v-card-text class="text-left pt-0 pb-0">
          <pre>
            <code>
              {{ imgTAG }}
            </code>
          </pre>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgTAG: '<img src="https://img.shields.io/badge/hoge-fuga-ff99cc?logo=appveyor&style=flat">',
    }
  }
}
</script>

<style scoped>
.piyo {
  background: #f0f0f0;
}
</style>
