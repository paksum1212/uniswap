<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
  background: #072654;
  background-image: radial-gradient(farthest-corner at 30% 5%, #062458 0%, #232429 100%);
}
body { 
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
  margin: 30px auto;
  padding: 10px;
  max-width: 1280px;
  font-size: 16px;
}

.pos {
  color: #22ab55 !important;
}
.neg {
  color: #e85e5f !important;
}
.unc {
  color: #666666 !important;
}

/* Icons */
.icon {
  position: relative;
  display: inline-block;
  background: #ffffff;
  padding: 0px;
  margin: 0px;
  border-radius: 50%;
  z-index: 10;
}
.icon > img {
  float: left;
}

/* Buttons */
.btn-add {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  vertical-align: middle;
  cursor: pointer;
}
.btn-add.disabled {
  border-color: #1A539A;
  color: #1A539A;
  cursor: default;
}
.btn-add::after {
  content: '+';
  width: 100%;
  height: 100%;
  text-align: center;
  display: block;
  line-height: 100%;
  font-size: 20px;
}
.btn-std {
  display: inline-block;
  height: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #2271E7;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  cursor: pointer;
}
.btn-std.disabled {
  color: #1A539A;
  background: #192C4C;
  cursor: default;
}

/* Cards */
.card {
  display: inline-block;
  border: 1px solid #36465F;
  border-radius: 10px;
  padding: 6px 15px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
.card.sel {
  background: #41444D;
}
</style>
