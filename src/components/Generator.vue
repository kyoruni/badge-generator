<template>
  <div class="generator">
    <input-form
      :color="color"
      :label="label"
      @changeColor="changeColor($event)"
      @changeLabel="changeLabel($event)"
    />
    <preview-icon
      :color="color"
      :label="label"
    />
  </div>
</template>

<script>
import InputForm from '@/components/Generator/InputForm'
import PreviewIcon from '@/components/PreviewIcon'

export default {
  components: {
    InputForm,
    PreviewIcon,
  },
  data () {
    return {
      color: '4fc08d',
      label: 'Vue.js',
    }
  },
  methods: {
    changeColor (event) {
      this.color = event
    },
    changeLabel (event) {
      this.label = event
    }
  }
}
</script>
