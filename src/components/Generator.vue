<template>
  <div class="generator">
    <input-form :color="color" @changeColor="changeColor($event)"/>
    <preview-icon :color="color"/>
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
    }
  },
  methods: {
    changeColor (event) {
      this.color = event
    }
  }
}
</script>
