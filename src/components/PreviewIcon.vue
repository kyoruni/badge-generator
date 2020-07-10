<template>
  <div class="preview-icon">
    <div class="text-center mt-2">
      <div class="badge-wrapper mb-2">
        <div v-html="imgTAG"/>
      </div>
      <div class="d-flex align-center">
        <v-text-field
          id="imgTAG"
          class="mr-2"
          background-color="#f0f0f0"
          v-model="imgTAG"
          outlined
          readonly
          hide-details
        />
        <v-btn
          title="クリップボードにコピー"
          icon
          depressed
          dark
          color="#93b6e8"
          v-clipboard:copy="imgTAG"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
        >
          <v-icon>far fa-copy</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'icon',
    'color',
    'leftText',
    'rightText',
  ],
  data () {
    return {
      iconURL: null,
    }
  },
  computed: {
    imgTAG () {
      return `<img src="https://img.shields.io/badge/${this.leftText}-${this.rightText}-${this.color.replace('#', '')}?${this.iconURL}&style=${this.type}">`
    }
  },
  methods: {
    copySuccess () {
      alert('クリップボードにコピーしました！')
    },
    copyError () {
      alert('コピーに失敗しました…')
    },
    setIconURL () {
      this.iconURL = this.icon ? `&logo=${this.icon}` : ''
    }
  },
  watch: {
    icon () {
      this.setIconURL()
    }
  },
  mounted () {
    this.setIconURL()
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
