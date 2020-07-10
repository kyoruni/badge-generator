<template>
  <div class="input-form">
    <v-row>
      <v-col colr="6">
        <v-select
          v-model="selectType"
          label="バッジタイプ"
          outlined
          hide-details
          item-text="label"
          item-value="value"
          :items="types"
        />
      </v-col>
      <v-col colr="6">
        <v-select
          v-model="selectIcon"
          label="アイコン"
          outlined
          hide-details
          item-text="label"
          item-value="value"
          :items="icons"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="inputLeftText" label="左テキスト" outlined clearable hide-details/>
      </v-col>
      <v-col cols="6">
        <v-text-field v-model="inputRightText" label="右テキスト" outlined clearable hide-details/>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-color-picker
          v-model="selectColor"
          hide-mode-switch
          show-swatches
          canvas-height="100"
          swatches-max-height="100"
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
          @click="setColorButton(defaultColor)"
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
          @click="setColorButton(presetColor)"
        >
          {{ presetColor.label }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SelectItems from '@/mixins/SelectItems.js'

export default {
  props: [
    'type',
    'icon',
    'color',
    'leftText',
    'rightText',
  ],
  mixins: [
    SelectItems,
  ],
  data () {
    return {
      selectType: '',
      selectIcon: '',
      selectColor: '',
      inputLeftText: '',
      inputRightText: '',
    }
  },
  methods: {
    setColorButton (preset) {
      this.selectColor = preset.color
      if (preset.icon) this.selectIcon = preset.icon
    }
  },
  watch: {
    selectType (value) {
      this.$emit('changeType', value)
    },
    selectIcon (value) {
      this.$emit('changeIcon', value)
    },
    selectColor (value) {
      this.$emit('changeColor', value)
    },
    inputLeftText (value) {
      if (!value) value = ''
      this.$emit('changeLeftText', value)
    },
    inputRightText (value) {
      if (!value) value = ''
      this.$emit('changeRightText', value)
    },
  },
  beforeMount () {
    this.selectType = this.type
    this.selectIcon = this.icon
    this.selectColor = this.color
    this.inputLeftText = this.leftText
    this.inputRightText = this.rightText
  },
}
</script>
