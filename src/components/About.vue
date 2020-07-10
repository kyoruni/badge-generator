<template>
  <div class="about">
    <v-dialog v-model="dialog" scrollable width="800">
      <v-card>
        <v-card-title primary-title>
          Badge Generator
        </v-card-title>
        <v-card-text>
          <!-- 説明文 -->
          <h3 class="mb-2">★ あばうと</h3>
          <ul class="mb-7">
            <li>バッジジェネレーター</li>
            <li><a href="https://shields.io/" target="_blank" title="Shields.io">Shields.io</a>のバッジをぽちぽち簡単に作成するツール</li>
            <li>READMEに張り付けるなどして、ドキュメントをいい感じにしよう！</li>
            <li>自分用に作成したため、変なところがあったらすみません</li>
          </ul>
          <h3 class="mb-2">★ つくった人</h3>
          <ul class="mb-7">
            <li>きょるに @kyoruni</li>
            <li>豆知識：左テキストを空にすると、一色のバッジになります</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
  }
}
</script>
