<template>
  <div class="input-form">
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="color"
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
        <v-text-field label="ラベル" outlined clearable hide-details/>
      </v-col>
      <v-col cols="6">
        <v-text-field label="バージョン" outlined clearable hide-details/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '',
      colors: [
        { label: 'red', value: 'red' },
        { label: 'blue', value: 'blue' },
        { label: 'pink', value: 'ff99cc' }
      ]
    }
  },
  watch: {
    color (value) {
      this.$emit('changeColor', value)
    }
  },
}
</script>