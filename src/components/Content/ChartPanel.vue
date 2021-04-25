<template>
  <div class="chart-panel card">
    <div>
      <div class="btn-group">
        <div class="card">Liquidity</div>
        <div class="card sel">Volume</div>
        <div class="card">{{ this.$code2 }}/{{ this.$code1 }}</div>
        <div class="card">{{ this.$code1 }}/{{ this.$code2 }}</div>
      </div>
      <div class="btn-group">
        <div class="card">1W</div>
        <div class="card">1M</div>
        <div class="card sel">All</div>
      </div>
    </div>
    <div class="chart">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartPanel',
  props: {
    
  }
}
</script>

<style scoped>
.chart-panel.card {
  display: block;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin-bottom: 10px;
  padding: 20px;
}
.chart-panel.card .card {
  padding: 6px 8px;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
}
.chart-panel.card .card:last-of-type {
  margin-right: 0px;
}

.btn-group {
  display: inline-block;
}
.btn-group:last-of-type {
  float: right;
}
</style>