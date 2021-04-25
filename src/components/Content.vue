<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <div class="container">
      <div>
        <DataCard title="Total Liquidity" :data=data.total_liquidity />
        <DataCard title="Volume (24hr)" :data=data.volume_24hr />
        <DataCard title="Fees (24hr)" :data=data.fees_24hr />
        <DataCard title="Pooled Tokens" :data=data.pooled_tokens />
      </div>
      <div>
        <ChartPanel />
      </div>
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
      title: "Pair Stats",
      data: { // TODO: implement data logic
        total_liquidity: {
          price: "US$16,865,240",
          change: "+5.62%"
        },
        volume_24hr: {
          price: "US$2,373,869",
          change: "+244%"
        },
        fees_24hr: {
          price: "US$7,122",
          change: "+244%"
        },
        pooled_tokens: {
          quantity1: "3,894",
          quantity2: "73,771,822"
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 18px;
  padding: 20px 0px;
}
.container {
  display: flex;
}
.container > div:first-of-type {
  width: 30%;
}
.container > div:last-of-type {
  width: 70%;
  margin-left: 10px;
}
.container > div > div:last-of-type {
  margin: 0px;
}
</style>