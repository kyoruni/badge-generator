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
        <v-btn
          v-for="defaultColor in defaultColors"
          :key="defaultColor.label"
          class="mr-1"
          color="indigo"
          small
          outlined
        >
          {{ defaultColor.label }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pt-0">
        <v-btn
          v-for="presetColor in presetColors"
          :key="presetColor.label"
          class="mr-1"
          color="indigo"
          small
          outlined
        >
          {{ presetColor.label }}
        </v-btn>
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
  computed: {
    defaultColors () {
      return [
        { label: 'Success' },
        { label: 'Important' },
        { label: 'Critical' },
        { label: 'Information' },
        { label: 'Inactive' },
      ]
    },
    presetColors () {
      return [
        { label: 'Ruby' },
        { label: 'PHP' },
        { label: 'Laravel' },
        { label: 'Vue.js' },
        { label: 'Docker' },
        { label: 'Heroku' },
      ]
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
