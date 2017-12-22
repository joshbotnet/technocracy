<template>
  <v-form v-model="valid">
    <v-text-field
      label="Id"
      v-model="id"
      disabled
    ></v-text-field>
    <v-text-field
      label="Title"
      v-model="title"
      :error-messages="titleErrors"
      @input="$v.title.$touch()"
      @blur="$v.title.$touch()"
      :counter="255"
      required
    ></v-text-field>
    <label for="body">Body</label>
    <vue-editor
      :editorToolbar="vueToolbar"
      label="Body"
      v-model="body"
      :error-messages="bodyErrors"
      @input="$v.body.$touch()"
      @blur="$v.body.$touch()"
      :counter="128"
      multi-line
      required
    ></vue-editor>
    <div v-html="body"></div>
    <v-btn @click.prevent="createItem()">Create</v-btn>
    <v-btn @click.prevent="updateItem()">Update</v-btn>
    <v-btn @click.prevent="deleteItem()">Delete</v-btn>
    <v-btn @click="clear()">clear</v-btn>
    <div><v-progress-circular v-if="mutatingItem" indeterminate color="primary"></v-progress-circular></div>
  </v-form>
</template>

<script>
import { VueEditor } from 'vue2-editor'

import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

import mutationCreateItem from '~/apollo/queries/mutationCreateItem'
import mutationUpdateItem from '~/apollo/queries/mutationUpdateItem'
import mutationDeleteItem from '~/apollo/queries/mutationDeleteItem'

export default {
  components: {
    VueEditor
  },
  mixins: [
    validationMixin
  ],
  validations: {
    title: { required, maxLength: maxLength(255) },
    body: { required, maxLength: maxLength(128) }
  },
  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.maxLength && errors.push('Title maximum length is 255 characters')
      !this.$v.title.required && errors.push('Title is required.')
      return errors
    },
    bodyErrors () {
      const errors = []
      if (!this.$v.body.$dirty) return errors
      !this.$v.body.maxLength && errors.push('Body maximum length is 128 characters')
      !this.$v.body.required && errors.push('Body is required.')
      return errors
    }
  },
  mounted () {
    this.$root.$on('itemToEdit', data => {
      this.id = data.id
      this.title = data.title
      this.body = data.body
    })
  },
  data () {
    return {
      mutatingItem: false,
      valid: false,
      id: '',
      title: '',
      body: '',
      vueToolbar: [
        [
          { 'header': [2, 3, 4, false] },
          'bold',
          'italic',
          { 'list': 'ordered' },
          { 'list': 'bullet' },
          { 'align': '' },
          { 'align': 'center' },
          'link',
          'blockquote',
          'code-block',
          'clean'
        ]
      ]
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.id = ''
      this.title = ''
      this.body = ''
    },
    createItem () {
      // Start the spinner
      this.mutatingItem = true
      // We save the user input in case of an error
      const newTitle = this.title.length >= 1 ? this.title : 'ITEM TITLE'
      const newBody = this.body.length >= 1 ? this.body : 'ITEM BODY'
      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: mutationCreateItem,
        // Parameters
        variables: {
          title: newTitle,
          body: newBody
        }
      }).then((data) => {
        // We update the form with the response data
        this.id = data.data.createItem.id
        this.title = data.data.createItem.title
        this.body = data.data.createItem.body
        // Stop the spinner
        this.mutatingItem = false
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        this.title = newTitle
        this.body = newBody
        // Stop the spinner
        this.mutatingItem = false
      })
    },
    updateItem () {
      // Start the spinner
      this.mutatingItem = true
      // We save the user input in case of an error
      const theId = this.id
      const newTitle = this.title.length >= 1 ? this.title : 'ITEM TITLE'
      const newBody = this.body.length >= 1 ? this.body : 'ITEM BODY'
      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: mutationUpdateItem,
        // Parameters
        variables: {
          id: theId,
          title: newTitle,
          body: newBody
        }
      }).then((data) => {
        // We update the form with the response data
        this.id = data.data.updateItem.id
        this.title = data.data.updateItem.title
        this.body = data.data.updateItem.body
        // Stop the spinner
        this.mutatingItem = false
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        this.id = theId
        this.title = newTitle
        this.body = newBody
        // Stop the spinner
        this.mutatingItem = false
      })
    },
    deleteItem () {
      // Start the spinner
      this.mutatingItem = true
      // We save the user input in case of an error
      const theId = this.id
      const newTitle = this.title
      const newBody = this.body

      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: mutationDeleteItem,
        // Parameters
        variables: {
          id: theId
        }
      }).then((data) => {
        // We update the form with the response data
        this.id = data.data.deleteItem.id
        this.title = data.data.deleteItem.title
        this.body = data.data.deleteItem.body
        // Stop the spinner
        this.mutatingItem = false
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
        this.id = theId
        this.title = newTitle
        this.body = newBody
        // Stop the spinner
        this.mutatingItem = false
      })
    }
  }
}
</script>
