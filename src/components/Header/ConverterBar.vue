<template>
  <div class="converter-bar">
    <div class="card"><span class="icon"><img v-bind:src="images.icon(this.$code1)" /></span>{{ format($code1, $code2, data.code1.value, data.code1.usd) }}</div>
    <div class="card"><span class="icon"><img v-bind:src="images.icon(this.$code2)" /></span>{{ format($code2, $code1, data.code2.value, data.code2.usd) }}</div>
  </div>
</template>

<script>
export default {
  name: 'ConverterBar',
  props: {
    
  },
  data() {
    return {
      format: (code1, code2, value1, value2) => `1 ${code1} = ${value1} ${code2} (US$${value2})`,
      images: {
        icon: (code) => require('@/assets/icons/' + code + '.png')
      },
      data: { // TODO: implement data logic
        code1: {
          value: "18,946",
          usd: "2,168"
        },
        code2: {
          value: "< 0.0001",
          usd: "0.11"
        }
      }
    }
  }
}
</script>

<style scoped>
.converter-bar {
  margin-bottom: 20px;
}
.icon {
  margin-right: 5px;
  vertical-align: text-top;
}
.icon > img {
  width: 15px;
  height: 15px;
}

.card {
  height: 20px;
  line-height: 20px;
}
</style>