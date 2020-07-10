<template>
  <div class="generator">
    <input-form
      :type="type"
      :icon="icon"
      :color="color"
      :leftText="leftText"
      :rightText="rightText"
      @changeType="changeType($event)"
      @changeIcon="changeIcon($event)"
      @changeColor="changeColor($event)"
      @changeLeftText="changeLeftText($event)"
      @changeRightText="changeRightText($event)"
    />
    <preview-icon
      :type="type"
      :icon="icon"
      :color="color"
      :leftText="leftText"
      :rightText="rightText"
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
      icon: 'Gatsby',
      color: '#44cc11',
      leftText: 'hoge',
      rightText: '1.2',
    }
  },
  methods: {
    changeType (event) {
      this.type = event
    },
    changeIcon (event) {
      this.icon = event
    },
    changeColor (event) {
      this.color = event
    },
    changeLeftText (event) {
      this.leftText = event
    },
    changeRightText (event) {
      this.rightText = event
    },
  }
}
</script>
