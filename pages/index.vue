<template>
  <div>
    <div class="page-bg">
      <img src="~/assets/svg/ic_content_copy_black_48px.svg" class="page-bg-logo">
    </div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>

      <v-layout row wrap>

        <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-3" id="welcome">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="center"><h1 class="display-1">Welcome</h1></div>
                <div>
                  <div class="anchor-list anchor-list-home">
                    <ul>
                      <li><router-link to="/about">About</router-link></li>
                      <li><router-link to="/clients">Clients</router-link></li>
                      <li><router-link to="/services">Services</router-link></li>
                      <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

</div>
</template>
