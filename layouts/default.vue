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
    scrollToTop: true,
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
            icon: 'info',
            title: 'About',
            href: 'about'
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

<style lang="scss">

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
    .page-bg-logo {
      width: 100%;
    }
  }



  .named-anchor {
    position: relative;
    top: -110px;
    display: none;
  }

  h1 {
    color: #666666;
  }

  h2, h3, h4, h5, h6 {
    color: #bbbbbb;
  }

  h1.display-1 {
    margin-bottom: 12px;
    font-size: 34px !important;
  }

  h2.display-1 {
    margin-bottom: 12px;
    font-size: 28px !important;
  }

  h3.display-1 {
    margin-bottom: 12px;
    font-size: 24px !important;
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

  .anchor-list {
    display: none;
    text-align: center;
    ul {
      list-style: none;
      list-style-type: none;
      margin: 0 0 16px 0;
      padding: 0;
      li {
        list-style: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
    &.anchor-list-home {
      display: block;
      ul {
        li {
          display: inline-block;
          padding: 0 10px;
        }
      }
    }
  }

  .card__title > div {
    width: 100%;
  }

  .btn {
    margin: 6px 4px;
  }

  .banner_image {
    display: block;
    float: left;
    margin: 0 !important;
    width: 282px;
    height: 64px;
    background-size: 282px 64px;
    background-image: url("/assets/svg/logo.svg");
  }

  a:link .banner_image,
  a:focus .banner_image,
  a:active .banner_image,
  a:visited .banner_image {
    background-image: url("/assets/svg/logo.svg");
  }

  a:hover .banner_image {
    background-image: url("/assets/svg/logo.svg");
  }

  .heading-icon {
    color: #666666;
  }

  .heading-icon-md {
    font-size: 52px;
  }

  .center {
    text-align: center;
  }

  .footer {
    padding: 0 0 0 16px;
    position: relative;
    z-index: 2;
  }

  @media only screen and (max-width: 959px) {

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

    .named-anchor {
      top: -90px;
      display: none;
    }

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

/*
red
pink
purple
deep-purple
indigo
blue
light-blue
cyan
teal
green
light-green
lime
yellow
amber
orange
deep-orange
brown
grey
blue-grey
*/

.color-red-500 { color: #f44336; }
.color-red-50 { color: #ffebee; }
.color-red-100 { color: #ffcdd2; }
.color-red-200 { color: #ef9a9a; }
.color-red-300 { color: #e57373; }
.color-red-400 { color: #ef5350; }
.color-red-500 { color: #f44336; }
.color-red-600 { color: #e53935; }
.color-red-700 { color: #d32f2f; }
.color-red-800 { color: #c62828; }
.color-red-900 { color: #b71c1c; }
.color-red-a100 { color: #ff8a80; }
.color-red-a200 { color: #ff5252; }
.color-red-a400 { color: #ff1744; }
.color-red-a700 { color: #d50000; }

.color-pink-500 { color: #e91e63; }
.color-pink-50 { color: #fce4ec; }
.color-pink-100 { color: #f8bbd0; }
.color-pink-200 { color: #f48fb1; }
.color-pink-300 { color: #f06292; }
.color-pink-400 { color: #ec407a; }
.color-pink-500 { color: #e91e63; }
.color-pink-600 { color: #d81b60; }
.color-pink-700 { color: #c2185b; }
.color-pink-800 { color: #ad1457; }
.color-pink-900 { color: #880e4f; }
.color-pink-a100 { color: #ff80ab; }
.color-pink-a200 { color: #ff4081; }
.color-pink-a400 { color: #f50057; }
.color-pink-a700 { color: #c51162; }

.color-purple-500 { color: #9c27b0; }
.color-purple-50 { color: #f3e5f5; }
.color-purple-100 { color: #e1bee7; }
.color-purple-200 { color: #ce93d8; }
.color-purple-300 { color: #ba68c8; }
.color-purple-400 { color: #ab47bc; }
.color-purple-500 { color: #9c27b0; }
.color-purple-600 { color: #8e24aa; }
.color-purple-700 { color: #7b1fa2; }
.color-purple-800 { color: #6a1b9a; }
.color-purple-900 { color: #4a148c; }
.color-purple-a100 { color: #ea80fc; }
.color-purple-a200 { color: #e040fb; }
.color-purple-a400 { color: #d500f9; }
.color-purple-a700 { color: #aa00ff; }

.color-deep-purple-500 { color: #673ab7; }
.color-deep-purple-50 { color: #ede7f6; }
.color-deep-purple-100 { color: #d1c4e9; }
.color-deep-purple-200 { color: #b39ddb; }
.color-deep-purple-300 { color: #9575cd; }
.color-deep-purple-400 { color: #7e57c2; }
.color-deep-purple-500 { color: #673ab7; }
.color-deep-purple-600 { color: #5e35b1; }
.color-deep-purple-700 { color: #512da8; }
.color-deep-purple-800 { color: #4527a0; }
.color-deep-purple-900 { color: #311b92; }
.color-deep-purple-a100 { color: #b388ff; }
.color-deep-purple-a200 { color: #7c4dff; }
.color-deep-purple-a400 { color: #651fff; }
.color-deep-purple-a700 { color: #6200ea; }

.color-indigo-500 { color: #3f51b5; }
.color-indigo-50 { color: #e8eaf6; }
.color-indigo-100 { color: #c5cae9; }
.color-indigo-200 { color: #9fa8da; }
.color-indigo-300 { color: #7986cb; }
.color-indigo-400 { color: #5c6bc0; }
.color-indigo-500 { color: #3f51b5; }
.color-indigo-600 { color: #3949ab; }
.color-indigo-700 { color: #303f9f; }
.color-indigo-800 { color: #283593; }
.color-indigo-900 { color: #1a237e; }
.color-indigo-a100 { color: #8c9eff; }
.color-indigo-a200 { color: #536dfe; }
.color-indigo-a400 { color: #3d5afe; }
.color-indigo-a700 { color: #304ffe; }

.color-blue-500 { color: #2196f3; }
.color-blue-50 { color: #e3f2fd; }
.color-blue-100 { color: #bbdefb; }
.color-blue-200 { color: #90caf9; }
.color-blue-300 { color: #64b5f6; }
.color-blue-400 { color: #42a5f5; }
.color-blue-500 { color: #2196f3; }
.color-blue-600 { color: #1e88e5; }
.color-blue-700 { color: #1976d2; }
.color-blue-800 { color: #1565c0; }
.color-blue-900 { color: #0d47a1; }
.color-blue-a100 { color: #82b1ff; }
.color-blue-a200 { color: #448aff; }
.color-blue-a400 { color: #2979ff; }
.color-blue-a700 { color: #2962ff; }

.color-light-blue-500 { color: #03a9f4; }
.color-light-blue-50 { color: #e1f5fe; }
.color-light-blue-100 { color: #b3e5fc; }
.color-light-blue-200 { color: #81d4fa; }
.color-light-blue-300 { color: #4fc3f7; }
.color-light-blue-400 { color: #29b6f6; }
.color-light-blue-500 { color: #03a9f4; }
.color-light-blue-600 { color: #039be5; }
.color-light-blue-700 { color: #0288d1; }
.color-light-blue-800 { color: #0277bd; }
.color-light-blue-900 { color: #01579b; }
.color-light-blue-a100 { color: #80d8ff; }
.color-light-blue-a200 { color: #40c4ff; }
.color-light-blue-a400 { color: #00b0ff; }
.color-light-blue-a700 { color: #0091ea; }

.color-cyan-500 { color: #00bcd4; }
.color-cyan-50 { color: #e0f7fa; }
.color-cyan-100 { color: #b2ebf2; }
.color-cyan-200 { color: #80deea; }
.color-cyan-300 { color: #4dd0e1; }
.color-cyan-400 { color: #26c6da; }
.color-cyan-500 { color: #00bcd4; }
.color-cyan-600 { color: #00acc1; }
.color-cyan-700 { color: #0097a7; }
.color-cyan-800 { color: #00838f; }
.color-cyan-900 { color: #006064; }
.color-cyan-a100 { color: #84ffff; }
.color-cyan-a200 { color: #18ffff; }
.color-cyan-a400 { color: #00e5ff; }
.color-cyan-a700 { color: #00b8d4; }

.color-teal-500 { color: #009688; }
.color-teal-50 { color: #e0f2f1; }
.color-teal-100 { color: #b2dfdb; }
.color-teal-200 { color: #80cbc4; }
.color-teal-300 { color: #4db6ac; }
.color-teal-400 { color: #26a69a; }
.color-teal-500 { color: #009688; }
.color-teal-600 { color: #00897b; }
.color-teal-700 { color: #00796b; }
.color-teal-800 { color: #00695c; }
.color-teal-900 { color: #004d40; }
.color-teal-a100 { color: #a7ffeb; }
.color-teal-a200 { color: #64ffda; }
.color-teal-a400 { color: #1de9b6; }
.color-teal-a700 { color: #00bfa5; }

.color-green-500 { color: #4caf50; }
.color-green-50 { color: #e8f5e9; }
.color-green-100 { color: #c8e6c9; }
.color-green-200 { color: #a5d6a7; }
.color-green-300 { color: #81c784; }
.color-green-400 { color: #66bb6a; }
.color-green-500 { color: #4caf50; }
.color-green-600 { color: #43a047; }
.color-green-700 { color: #388e3c; }
.color-green-800 { color: #2e7d32; }
.color-green-900 { color: #1b5e20; }
.color-green-a100 { color: #b9f6ca; }
.color-green-a200 { color: #69f0ae; }
.color-green-a400 { color: #00e676; }
.color-green-a700 { color: #00c853; }

.color-light-green-500 { color: #8bc34a; }
.color-light-green-50 { color: #f1f8e9; }
.color-light-green-100 { color: #dcedc8; }
.color-light-green-200 { color: #c5e1a5; }
.color-light-green-300 { color: #aed581; }
.color-light-green-400 { color: #9ccc65; }
.color-light-green-500 { color: #8bc34a; }
.color-light-green-600 { color: #7cb342; }
.color-light-green-700 { color: #689f38; }
.color-light-green-800 { color: #558b2f; }
.color-light-green-900 { color: #33691e; }
.color-light-green-a100 { color: #ccff90; }
.color-light-green-a200 { color: #b2ff59; }
.color-light-green-a400 { color: #76ff03; }
.color-light-green-a700 { color: #64dd17; }

.color-lime-500 { color: #cddc39; }
.color-lime-50 { color: #f9fbe7; }
.color-lime-100 { color: #f0f4c3; }
.color-lime-200 { color: #e6ee9c; }
.color-lime-300 { color: #dce775; }
.color-lime-400 { color: #d4e157; }
.color-lime-500 { color: #cddc39; }
.color-lime-600 { color: #c0ca33; }
.color-lime-700 { color: #afb42b; }
.color-lime-800 { color: #9e9d24; }
.color-lime-900 { color: #827717; }
.color-lime-a100 { color: #f4ff81; }
.color-lime-a200 { color: #eeff41; }
.color-lime-a400 { color: #c6ff00; }
.color-lime-a700 { color: #aeea00; }

.color-yellow-500 { color: #ffeb3b; }
.color-yellow-50 { color: #fffde7; }
.color-yellow-100 { color: #fff9c4; }
.color-yellow-200 { color: #fff59d; }
.color-yellow-300 { color: #fff176; }
.color-yellow-400 { color: #ffee58; }
.color-yellow-500 { color: #ffeb3b; }
.color-yellow-600 { color: #fdd835; }
.color-yellow-700 { color: #fbc02d; }
.color-yellow-800 { color: #f9a825; }
.color-yellow-900 { color: #f57f17; }
.color-yellow-a100 { color: #ffff8d; }
.color-yellow-a200 { color: #ffff00; }
.color-yellow-a400 { color: #ffea00; }
.color-yellow-a700 { color: #ffd600; }

.color-amber-500 { color: #ffc107; }
.color-amber-50 { color: #fff8e1; }
.color-amber-100 { color: #ffecb3; }
.color-amber-200 { color: #ffe082; }
.color-amber-300 { color: #ffd54f; }
.color-amber-400 { color: #ffca28; }
.color-amber-500 { color: #ffc107; }
.color-amber-600 { color: #ffb300; }
.color-amber-700 { color: #ffa000; }
.color-amber-800 { color: #ff8f00; }
.color-amber-900 { color: #ff6f00; }
.color-amber-a100 { color: #ffe57f; }
.color-amber-a200 { color: #ffd740; }
.color-amber-a400 { color: #ffc400; }
.color-amber-a700 { color: #ffab00; }

.color-orange-500 { color: #ff9800; }
.color-orange-50 { color: #fff3e0; }
.color-orange-100 { color: #ffe0b2; }
.color-orange-200 { color: #ffcc80; }
.color-orange-300 { color: #ffb74d; }
.color-orange-400 { color: #ffa726; }
.color-orange-500 { color: #ff9800; }
.color-orange-600 { color: #fb8c00; }
.color-orange-700 { color: #f57c00; }
.color-orange-800 { color: #ef6c00; }
.color-orange-900 { color: #e65100; }
.color-orange-a100 { color: #ffd180; }
.color-orange-a200 { color: #ffab40; }
.color-orange-a400 { color: #ff9100; }
.color-orange-a700 { color: #ff6d00; }

.color-deep-orange-500 { color: #ff5722; }
.color-deep-orange-50 { color: #fbe9e7; }
.color-deep-orange-100 { color: #ffccbc; }
.color-deep-orange-200 { color: #ffab91; }
.color-deep-orange-300 { color: #ff8a65; }
.color-deep-orange-400 { color: #ff7043; }
.color-deep-orange-500 { color: #ff5722; }
.color-deep-orange-600 { color: #f4511e; }
.color-deep-orange-700 { color: #e64a19; }
.color-deep-orange-800 { color: #d84315; }
.color-deep-orange-900 { color: #bf360c; }
.color-deep-orange-a100 { color: #ff9e80; }
.color-deep-orange-a200 { color: #ff6e40; }
.color-deep-orange-a400 { color: #ff3d00; }
.color-deep-orange-a700 { color: #dd2c00; }

.color-brown-500 { color: #795548; }
.color-brown-50 { color: #efebe9; }
.color-brown-100 { color: #d7ccc8; }
.color-brown-200 { color: #bcaaa4; }
.color-brown-300 { color: #a1887f; }
.color-brown-400 { color: #8d6e63; }
.color-brown-500 { color: #795548; }
.color-brown-600 { color: #6d4c41; }
.color-brown-700 { color: #5d4037; }
.color-brown-800 { color: #4e342e; }
.color-brown-900 { color: #3e2723; }

.color-grey-500 { color: #9e9e9e; }
.color-grey-50 { color: #fafafa; }
.color-grey-100 { color: #f5f5f5; }
.color-grey-200 { color: #eeeeee; }
.color-grey-300 { color: #e0e0e0; }
.color-grey-400 { color: #bdbdbd; }
.color-grey-500 { color: #9e9e9e; }
.color-grey-600 { color: #757575; }
.color-grey-700 { color: #616161; }
.color-grey-800 { color: #424242; }
.color-grey-900 { color: #212121; }

.color-blue-grey-500 { color: #607d8b; }
.color-blue-grey-50 { color: #eceff1; }
.color-blue-grey-100 { color: #cfd8dc; }
.color-blue-grey-200 { color: #b0bec5; }
.color-blue-grey-300 { color: #90a4ae; }
.color-blue-grey-400 { color: #78909c; }
.color-blue-grey-500 { color: #607d8b; }
.color-blue-grey-600 { color: #546e7a; }
.color-blue-grey-700 { color: #455a64; }
.color-blue-grey-800 { color: #37474f; }
.color-blue-grey-900 { color: #263238; }

</style>
