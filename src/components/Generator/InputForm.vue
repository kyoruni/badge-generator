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
          :color="defaultColor.color"
          small
          outlined
          @click="setColorButton(defaultColor.color)"
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
          :color="presetColor.color"
          small
          outlined
          @click="setColorButton(presetColor.color)"
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
        { label: 'Success', color: '#44cc11' },
        { label: 'Important', color: '#fe7d37' },
        { label: 'Critical', color: '#e05d44' },
        { label: 'Information', color: '#007ec6' },
        { label: 'Inactive', color: '#9f9f9f' },
      ]
    },
    presetColors () {
      return [
        { label: 'Ruby', color: '#cc0000' },
        { label: 'PHP', color: '#8892be' },
        { label: 'Laravel', color: '#ff2d20' },
        { label: 'Vue.js', color: '#4fc08d' },
        { label: 'Docker', color: '#53d2f9' },
        { label: 'Heroku', color: '#79589f' },
      ]
    }
  },
  methods: {
    setColorButton (color) {
      this.selectColor = color
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
