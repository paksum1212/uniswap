<template>
  <div class="top-bar">
    <div>
      <span class="icon"><img v-bind:src="images.icon(this.$code1)" /></span>
      <span class="icon"><img v-bind:src="images.icon(this.$code2)" /></span>
      <span class="title">{{ title }}</span>
    </div>
    <div>
      <div class="btn-add" v-bind:class="{ disabled: !enable.add }"></div>
      <div class="btn-std" v-bind:class="{ disabled: !enable.addLiquidity }">+ Add Liquidy</div>
      <div class="btn-std" v-bind:class="{ disabled: !enable.trade }">Trade</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: String,
    enable: Object
  },
  data() {
    return {
      images: {
        icon: (code) => require('@/assets/icons/' + code + '.png')
      }
    }
  }
}
</script>

<style scoped>
.top-bar {
  position: relative;
  margin-bottom: 20px;
}
.top-bar > div {
  display: inline-block;
}
.top-bar > div:last-of-type {
  float: right;
}
.top-bar > div:last-of-type > div {
  margin-left: 10px;
}

.icon {
  position: relative;
  display: inline-block;
  background: #ffffff;
  padding: 0px;
  margin: 0px;
  border-radius: 50%;
  vertical-align: text-bottom;
  z-index: 10;
}
.icon > img {
  float: left;
  width: 30px;
  height: 30px;
}
.icon + .icon {
  margin-left: -15px;
  z-index: 5;
}
.title {
  margin-left: 20px;
  font-size: 30px;
  line-height: 30px;
}
</style>