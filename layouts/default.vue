<template>
  <v-app>
    <v-navigation-drawer
      temporary
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
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <router-link to="/"><v-toolbar-title class="banner_image"></v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer2 = !drawer2"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      :right="right"
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer2"
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

    <v-footer :fixed="fixed" app>
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
        drawer2: false,
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

  .application--light {
    background-color: #d3d3d3 !important;
  }

  .application--light .toolbar .btn:not(.btn--disabled):not(.btn--date-picker).btn--floating,
  .application--light .toolbar .btn:not(.btn--disabled):not(.btn--date-picker).btn--icon {
    color: rgba(255,255,255,.54);
  }

  .toolbar {
    background-color: rgba(10,10,10,0.9) !important;
  }

  .card {
    background-color: rgba(255,255,255,0.5) !important;
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

  .page-bg-home {

  }


  h1, h2, h3, h4, h5, h6 {
    color: #aaaaaa;
  }

  .display-1, .display-2, .display-3, .display-4 {

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
    height: 104px;
  }

  main > .content {
    padding-top: 104px !important;
  }

  .toolbar__content {
    height: 104px !important;
  }

  .banner_image {
    display: block;
    float: left;
    background-image: url("/assets/svg/logo.svg");
    width: 370px;
    height: 84px;
    background-size: 370px 84px;
    margin: 0 !important;
  }

  .headline {
    color: #777777;
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

  @media screen and (max-width: 639px) {

    .page-bg {
      top: 50px;
      left: 5%;
      right: 0;
      width: 90%;
    }

    .toolbar.toolbar--fixed {
      height: 84px;
    }

    main > .content {
      padding-top: 84px !important;
    }

    .banner_image {
      width: 282px;
      height: 64px;
      background-size: 282px 64px;
    }

    .toolbar__content {
      height: 84px !important;
    }

  }

</style>
