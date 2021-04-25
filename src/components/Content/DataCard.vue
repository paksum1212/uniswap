<template>
  <div class="data-card card">
    <div class="title">{{ title }}</div>
    <div class="t1" v-if="data.price != null && data.change != null">
      <span>{{ data.price }}</span>
      <span v-bind:class="{ 
        pos: checkValue('pos', data.change), 
        neg: checkValue('neg', data.change), 
        unc: checkValue('unc', data.change) 
      }">{{ data.change }}</span>
    </div>
    <div class="t2" v-else-if="data.quantity1 != null && data.quantity2 != null">
      <div><span class="icon"><img v-bind:src="icon(this.$code1)" /></span>{{ data.quantity1 }} {{this.$code1}}</div>
      <div><span class="icon"><img v-bind:src="icon(this.$code2)" /></span>{{ data.quantity2 }} {{this.$code2}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    title: String,
    data: Object
  },
  methods: {
    icon: (code) => require('@/assets/icons/' + code + '.png'),
    checkValue: (t, d) => t === (d.indexOf("+") >= 0 ? "pos" : d.indexOf("-") >= 0 ? "neg" : "unc")
  }
}
</script>

<style scoped>
.card {
  display: block;
  width: calc(100% - 40px);
  min-height: 60px;
  margin-bottom: 10px;
  padding: 20px;
}
.title {
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
  vertical-align: text-top;
}
.icon > img {
  width: 25px;
  height: 25px;
}

.t1 > span:first-of-type {
  font-size: 24px;
}
.t1 > span:last-of-type {
  float: right;
  font-size: 15px;
  margin-top: 10px;
}

.t2 {
  font-size: 24px;
}
.t2 > div {
  margin-bottom: 10px;
}
</style>