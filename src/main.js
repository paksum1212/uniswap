import Vue from 'vue'
import App from './App.vue'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import VueApollo from 'vue-apollo';

Vue.config.productionTip = false

// Global Config
Vue.prototype.$code1 = "ETH"
Vue.prototype.$code2 = "CONV"

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  // inject apolloProvider here like vue-router or vuex
  apolloProvider
}).$mount('#app')
