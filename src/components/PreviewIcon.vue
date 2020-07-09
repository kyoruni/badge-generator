<template>
  <div class="preview-icon">
    <div class="text-center mt-2">
      <div class="badge-wrapper">
        <div v-html="imgTAG"/>
      </div>
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
  props: [
    'color',
    'label',
    'version',
  ],
  computed: {
    imgTAG () {
      return `<img src="https://img.shields.io/badge/${this.label}-${this.version}-${this.color.replace('#', '')}?&style=flat">`
    }
  }
}
</script>

<style scoped>
.piyo {
  background: #f0f0f0;
}

/* 画面がガタつかないように、あらかじめ高さをとっておく */
.badge-wrapper {
  height: 30px;
}
</style>
