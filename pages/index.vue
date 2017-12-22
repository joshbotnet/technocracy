<template>
  <div>
    <logo/>
    <h1 class="display-2">
      TeaChest
    </h1>
    <h2 class="display-1">
      Nuxt.js project with GraphQL
    </h2>
    <p>Hi from {{ name }}</p>
    <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <item-card v-for="item in allItems" :item="item" :key="item.id"></item-card>
      </v-layout>
    </v-container>
    <item-form></item-form>
    <v-layout>
      <item-card v-if="Item" :item="Item"></item-card>
    </v-layout>
    <p>{{ output }} </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ItemCard from '@/components/ItemCard'
import ItemForm from '@/components/ItemForm'

import queryItem from '~/apollo/queries/queryItem'
import queryItems from '~/apollo/queries/queryItems'

// import subscriptionItem from '~/apollo/queries/subscriptionItem'

export default {
  data () {
    return {
      output: 'Test output',
      id: '',
      title: '',
      body: ''
    }
  },
  components: {
    Logo,
    ItemCard,
    ItemForm
  },
  asyncData () {
    return {
      name: (process.server ? 'server' : 'client')
    }
  },
  apollo: {
    Item: {
      prefetch: true,
      query: queryItem,
      variables: {
        id: 'cj9ndt7ktpjfr017359znsldb'
      }
    },
    allItems: {
      prefetch: true,
      query: queryItems,
      variables: {
        // id: 'cj9ndt7ktpjfr017359znsldb'
      }
    }
    /*
    subscriptionItem: {
      prefetch: false,
      query: subscriptionItem
    }
    */
  }
}
</script>

<style lang="scss">
.display-1, .display-2, .display-3, .display-4 {
  font-family: "Roboto Slab", sans-serif;
}

</style>
