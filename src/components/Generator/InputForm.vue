<template>
  <div class="input-form">
    <v-row>
      <v-col cols="12">
        <v-color-picker
          v-model="selectColor"
          hide-mode-switch
        />
        <v-select
          v-model="selectColor"
          label="色"
          outlined
          hide-details
          item-text="label"
          item-value="value"
          :items="colors"
        />
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
    let updateValue = null
    if (value.toString().match(/#[a-zA-Z0-9]{8}/)) {
        updateValue = value.substr(0, 7);
      }
      this.$emit('changeColor', updateValue)
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
