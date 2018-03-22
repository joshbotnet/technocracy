<template>
  <div>
    <div class="page-bg">
      <img src="~/assets/svg/ic_format_textdirection_l_to_r_black_48px.svg" class="page-bg-logo">
    </div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>
      <!-- <div class="page-bg page-pg-home"><i class="material-icons page-bg-icon-md">stars</i></div> -->
      <v-layout row wrap>

    <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><h2 class="display-1">Our services</h2></div>
            <div>
              <p>Technocrat is a digital agency specialising in government, commercial and community work for <router-link to="clients">clients</router-link> with complex web publishing requirements. Established in 2009, we are a large team of more than 30 people based mainly in Melbourne, Sydney and Brisbane.</p>
              <p>Our <router-link to="services">services</router-link> include interaction design, graphic design and project management, as well as web development, hosting and support. Our technical focus is balanced by a supportive, collaborative and inclusive work culture. Our CEO takes great care of our staff and clients, who in turn take care of our products and services.</p>
              <p>Beyond our preference for open source technologies and Agile project management, our size and diversity allow us to adapt to any type of engagement. We invite you to <router-link to="contact">contact</router-link> us to discuss your next project.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">touch_app</i><h3 class="display-1">Interaction design</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">visibility</i><h3 class="display-1">Graphic design</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">trending_up</i><h3 class="display-1">Project management</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">code</i><h3 class="display-1">Web development</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">cloud_queue</i><h3 class="display-1">Hosting</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <!-- <div v-text="item.id"></div> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 sm12 md6 lg4 xl3 class="pa-3">
      <v-card height="100%">
        <v-card-title primary-title>
          <div>
            <div class="center"><i class="material-icons heading-icon heading-icon-md">supervisor_account</i><h3 class="display-1">Support</h3></div>
            <div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
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
