<template>
  <div class="generator">
    <input-form
      :type="type"
      :color="color"
      :leftText="leftText"
      :version="version"
      @changeType="changeType($event)"
      @changeColor="changeColor($event)"
      @changeLeftText="changeLeftText($event)"
      @changeVersion="changeVersion($event)"
    />
    <preview-icon
      :type="type"
      :color="color"
      :leftText="leftText"
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
      color: '#44cc11',
      leftText: 'hoge',
      version: '1.2',
    }
  },
  methods: {
    changeType (event) {
      this.type = event
    },
    changeColor (event) {
      this.color = event
    },
    changeLeftText (event) {
      this.leftText = event
    },
    changeVersion (event) {
      this.version = event
    },
  }
}
</script>
