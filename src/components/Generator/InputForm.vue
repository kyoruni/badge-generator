<template>
  <div class="input-form">
    <v-row>
      <v-select :items="icons" label="アイコン" outlined/>
    </v-row>
    <v-row>
      <v-text-field label="色" outlined/>
    </v-row>
    <v-row>
      <v-text-field label="左側のテキスト" outlined/>
      <v-text-field label="右側のテキスト" outlined/>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'item1',
        'item2',
        'item3',
      ]
    }
  }
}
</script>