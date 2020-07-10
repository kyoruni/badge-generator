<template>
  <div class="preview-icon">
    <div class="text-center mt-2">
      <div class="badge-wrapper mb-2">
        <div v-html="imgTAG"/>
      </div>
      <v-text-field id="imgTAG" v-model="imgTAG" outlined readonly hide-details/>
      <button
        v-clipboard:copy="imgTAG"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
      >
        コピー
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'color',
    'label',
    'version',
  ],
  computed: {
    imgTAG () {
      return `<img src="https://img.shields.io/badge/${this.label}-${this.version}-${this.color.replace('#', '')}?&style=${this.type}">`
    }
  },
  methods: {
    copySuccess () {
      alert('クリップボードにコピーしました！')
    },
    copyError () {
      alert('コピーに失敗しました…')
    }
  },
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
