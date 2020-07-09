<template>
  <div class="generator">
    <input-form @changeColor="changeColor($event)"/>
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
      color: 'red',
    }
  },
  methods: {
    changeColor (event) {
      this.color = event
    }
  }
}
</script>
