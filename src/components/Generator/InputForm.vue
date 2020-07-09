<template>
  <div class="input-form">
    <v-row>
      <v-col cols="6">
        <v-select :items="icons" label="アイコン" outlined hide-details/>
      </v-col>
      <v-col cols="6">
        <v-text-field label="色" outlined hide-details/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field label="ラベル" outlined clearable hide-details/>
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