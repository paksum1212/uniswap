<template>
  <div class="converter-bar" v-if="pairs">
    <div class="card"><span class="icon"><img v-bind:src="icon(this.$code1)" /></span>{{ format($code1, $code2, getPrice($code1, pairs), data.code1.usd) }}</div>
    <div class="card"><span class="icon"><img v-bind:src="icon(this.$code2)" /></span>{{ format($code2, $code1, getPrice($code2, pairs), data.code2.usd) }}</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_PAIR = gql`
  query getPair($id: ID!) {
    pairs (where: { id: $id }) {
      id,
      token0Price,
      token1Price
    }
  }
`;

const GET_PAIR_VAR = {   
  id: "0x06ad23978f67ae8cc76c54b74993b31a816bac2b"
};

export default {
  name: 'ConverterBar',
  props: {
    
  },
  methods: {
    format: (code1, code2, value1, value2) => `1 ${code1} = ${value1} ${code2} (US$${value2})`,
    icon: (code) => require('@/assets/icons/' + code + '.png'),
    getPrice: (code, pairs) => {
      if (pairs && pairs.length > 0) {
        let price = code === "CONV" ? parseFloat(pairs[0].token0Price) : code === "ETH" ? parseFloat(pairs[0].token1Price) : 0;
        return price > 0 && price < 0.0001 ? "< 0.0001" : price.toFixed(0).replace(/(.)(?=(\d{3})+$)/g,'$1,');
      }
      return 0;
    }
  },
  data() {
    return {
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
  },
  apollo: {
    pairs: {
      query: GET_PAIR,
      variables: () => GET_PAIR_VAR
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
.card:not(:first-of-type) {
  margin-left: 15px;
}
</style>