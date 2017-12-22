<template>
  <v-flex xs12 sm12 md6 lg4 xl3>
    <v-card height="100%">
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0" v-text="item.title"></h3>
          <div v-html="item.body"></div>
          <!-- <div v-text="item.id"></div> -->
        </div>
      </v-card-title>
      <v-card-actions>
        <nuxt-link :to="`item/${item.id}`">
          View
        </nuxt-link>
        <v-btn flat color="green" @click.prevent="editItem()">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    editItem () {
      this.$root.$emit('itemToEdit', this.item)
      console.log(this)
    }
  }
}
</script>
