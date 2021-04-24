<template>
  <div class="header">
    <TopBar :title=title :enable=enable></TopBar>
    <ConverterBar />
  </div>
</template>

<script>
import TopBar from './Header/TopBar.vue'
import ConverterBar from './Header/ConverterBar.vue'

export default {
  name: 'Header',
  props: {
    
  },
  components: {
    TopBar,
    ConverterBar
  },
  data () {
    return {
      title: this.$code1 + "-" + this.$code2 + " Pair",
      enable: {
        add: true,
        addLiquidity: false,
        trade: true
      }
    }
  }
}
</script>

<style scoped>

</style>