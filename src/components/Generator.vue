<template>
  <div class="generator">
    <input-form
      :color="color"
      :label="label"
      :version="version"
      @changeColor="changeColor($event)"
      @changeLabel="changeLabel($event)"
      @changeVersion="changeVersion($event)"
    />
    <preview-icon
      :color="color"
      :label="label"
      :version="version"
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
      color: '#4fc08d',
      label: 'Vue.js',
      version: '2.6.11',
    }
  },
  methods: {
    changeColor (event) {
      this.color = event
    },
    changeLabel (event) {
      this.label = event
    },
    changeVersion (event) {
      this.version = event
    },
  }
}
</script>
