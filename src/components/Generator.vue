<template>
  <div class="generator">
    <input-form
      :type="type"
      :icon="icon"
      :color="color"
      :leftText="leftText"
      :rightText="rightText"
      @changeBadge="changeBadge($event)"
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
      icon: null,
      color: '#007ec6',
      leftText: 'license',
      rightText: 'MIT',
    }
  },
  methods: {
    changeBadge (event) {
      switch (event.prop) {
        case 'type':
          this.type = event.value
          break
        case 'icon':
          this.icon = event.value
          break
        case 'color':
          this.color = event.value
          break
        case 'leftText':
          this.leftText = event.value
          break
        case 'rightText':
          this.rightText = event.value
          break
      }
    },
  }
}
</script>
