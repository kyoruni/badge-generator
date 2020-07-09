<template>
  <div class="input-form">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-color-picker v-model="selectColor" hide-mode-switch/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="inputLabel" label="ラベル" outlined clearable hide-details/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="inputVersion" label="バージョン" outlined clearable hide-details/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import colors from '@/mixins/colors.js'

export default {
  props: [
    'color',
    'label',
    'version',
  ],
  mixins: [
    colors,
  ],
  data () {
    return {
      selectColor: '',
      inputLabel: '',
      inputVersion: '',
    }
  },
  watch: {
    selectColor (value) {
      this.$emit('changeColor', value)
    },
    inputLabel (value) {
      this.$emit('changeLabel', value)
    },
    inputVersion (value) {
      this.$emit('changeVersion', value)
    },
  },
  beforeMount () {
    this.selectColor = this.color
    this.inputLabel = this.label
    this.inputVersion = this.version
  },
}
</script>

<style scoped>
.v-color-picker__input:last-child {
  display: none;
}
</style>
