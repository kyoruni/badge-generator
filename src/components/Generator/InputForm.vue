<template>
  <div class="input-form">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-color-picker
          v-model="selectColor"
          hide-mode-switch
          show-swatches
          :swatches="colors"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-0">
        <v-btn class="mr-1" small outlined color="indigo">Success</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Important</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Critical</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Information</v-btn>
        <v-btn small outlined color="indigo">Inactive</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-0">
        <v-btn class="mr-1" small outlined color="indigo">Ruby</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">PHP</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Laravel</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Vue.js</v-btn>
        <v-btn class="mr-1" small outlined color="indigo">Docker</v-btn>
        <v-btn small outlined color="indigo">Heroku</v-btn>
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
