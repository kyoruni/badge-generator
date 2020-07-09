<template>
  <div class="input-form">
    <v-row>
      <v-col cols="6">
        <v-select :items="icons" label="アイコン" outlined/>
      </v-col>
      <v-col cols="6">
        <v-text-field label="色" outlined/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="左側のテキスト" outlined clearable/>
      </v-col>
      <v-col cols="6">
        <v-text-field label="右側のテキスト" outlined clearable/>
      </v-col>
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