<template>
  <div class="top-bar">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: String,
    enable: Object
  }
}
</script>

<style scoped>

</style>