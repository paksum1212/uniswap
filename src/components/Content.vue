<template>
  <div class="content">
    <div>{{ title }}</div>
    <div>
      <DataCard />
      <DataCard />
      <DataCard />
      <DataCard />
    </div>
    <div>
      <ChartPanel />
    </div>
  </div>
</template>

<script>
import DataCard from './Content/DataCard.vue'
import ChartPanel from './Content/ChartPanel.vue'

export default {
  name: 'Content',
  props: {
    
  },
  components: {
    DataCard,
    ChartPanel
  },
  data () {
    return {
      title: "Pair Stats"
    }
  }
}
</script>

<style scoped>

</style>