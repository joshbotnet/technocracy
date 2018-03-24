<template>
  <v-app>
    <v-toolbar fixed app>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <router-link to="/"><v-toolbar-title class="banner_image"></v-toolbar-title></router-link>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      :right="right"
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="{path: item.href}"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" ></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <main>

      <v-content>
        <v-container>
            <v-layout column>
              <nuxt/>
            </v-layout>
        </v-container>
      </v-content>
    </main>

    <v-footer>
      <span>&copy; Technocrat 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'home',
            title: 'Home',
            href: '/'
          },
          {
            icon: 'person',
            title: 'Clients',
            href: 'clients'
          },
          {
            icon: 'stars',
            title: 'Services',
            href: 'services'
          },
          {
            icon: 'phone_in_talk',
            title: 'Contact',
            href: 'contact'
          }
        ],
        miniVariant: false,
        right: true
      }
    }
  }
</script>

<style>

  html {
    font-size: 16px;
  }

  .theme--light {
    background-color: #cccccc !important;
  }

  .container {
      padding: 10px 8px !important;
  }

  .theme--light .toolbar .btn:not(.btn--disabled):not(.btn--date-picker).btn--floating,
  .theme--light .toolbar .btn:not(.btn--disabled):not(.btn--date-picker).btn--icon {
    color: rgba(25,118,210,1);
  }



  .toolbar {
    background-color: rgba(0,0,0,0.85) !important;
  }

  .navigation-drawer {
    width: 160px !important;
  }

  .card {
    background-color: rgba(255,255,255,0.75) !important;
  }

  .page-bg {
    position: absolute;
    top: 0;
    left: 20%;
    right: 0;
    width: 60%;
  }

  .page-bg-logo {
    width: 100%;
  }

  h1 {
    color: #666666;
  }

  h2, h3, h4, h5, h6 {
    color: #bbbbbb;
  }

  h1.display-1 {
    margin-bottom: 12px;
  }

  h2.display-1 {
    margin-bottom: 12px;
  }

  h3.display-1 {
    margin-bottom: 12px;
  }

  a {
    text-decoration: none;
  }

  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .card__actions {
    display: flex;
    justify-content: flex-end;
  }

  .toolbar.toolbar--fixed {
    height: 84px;
  }

  main > .content {
    padding-top: 84px !important;
  }

  .toolbar__content {
    height: 84px !important;
  }

  .btn {
    margin: 6px 4px;
  }

  .banner_image {
    display: block;
    float: left;
    background-image: url("/assets/svg/logo-active.svg");
    margin: 0 !important;
    width: 282px;
    height: 64px;
    background-size: 282px 64px;
  }

  .heading-icon {
    color: #666666;
  }

  .heading-icon-md {
    font-size: 40px;
  }

  .center {
    text-align: center;
  }

  .footer {
    padding: 0 0 0 16px;
  }

  @media only screen and (max-width: 639px) {
    .page-bg {
      top: 50px;
      left: 5%;
      right: 0;
      width: 90%;
    }
  }

  @media only screen and (max-width: 479px) {

    .toolbar.toolbar--fixed {
      height: 68px;
    }

    main > .content {
      padding-top: 68px !important;
    }

    .toolbar__content {
      height: 68px !important;
    }

    .banner_image {
      width: 211.5px;
      height: 48px;
      background-size: 211.5px 48px;
    }
  }

</style>
