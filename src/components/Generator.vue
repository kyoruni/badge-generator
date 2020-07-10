<template>
  <div class="generator">
    <input-form
      :type="type"
      :color="color"
      :label="label"
      :version="version"
      @changeType="changeType($event)"
      @changeColor="changeColor($event)"
      @changeLabel="changeLabel($event)"
      @changeVersion="changeVersion($event)"
    />
    <preview-icon
      :type="type"
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
      type: 'flat',
      color: '#4fc08d',
      label: 'Vue.js',
      version: '2.6.11',
    }
  },
  methods: {
    changeType (event) {
      this.type = event
    },
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
