<template>
  <div class="input-form">
    <v-row>
      <v-col cols="12">
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
export default {
  props: [
    'color',
    'label',
    'version',
  ],
  data () {
    return {
      selectColor: '',
      inputLabel: '',
      inputVersion: '',
      colors: [
        { label: 'Vue.js', value: '4fc08d' },
        { label: 'red', value: 'red' },
        { label: 'blue', value: 'blue' },
        { label: 'pink', value: 'ff99cc' }
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