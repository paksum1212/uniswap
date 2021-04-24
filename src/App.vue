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
}

/* Common */
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
</style>
