<template>
  <div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>

      <v-layout row wrap>

        <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-0" id="about">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-green-200">perm_device_information</i><h2>Welcome</h2>
                <div>
                  <p>Technocrat is a digital agency specialising in government, commercial and community work for <router-link to="clients">clients</router-link> with diverse and complex web publishing requirements. Established in 2009, we are a large team of more than 30 people based mainly in Melbourne, Sydney and Brisbane.</p>
                  <p>Our <router-link to="services">services</router-link> include interaction design, graphic design and project management, as well as web development, hosting and support. Our technical focus is balanced by a supportive, collaborative and inclusive work culture.</p>
                  <p>Beyond our preference for open source technologies and Scrum-based project management, our size and diversity allow us to adapt to any type of engagement. We invite you to <router-link to="contact">contact</router-link> us to discuss your next project.</p>
                  <div class="anchor-list">
                    <ul>
                      <li><router-link to="/#accessible">Accessible</router-link></li>
                      <li><router-link to="/#reliable">Reliable</router-link></li>
                      <li><router-link to="/#secure">Secure</router-link></li>
                      <li><router-link to="/#open-source">Open source</router-link></li>
                      <li><router-link to="/#scrum">Scrum</router-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="accessible"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-pink-200">face</i><h3>Accessible</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="reliable" name="reliable"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-purple-200">track_changes</i><h3>Reliable</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="secure"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-orange-200">security</i><h3>Secure</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="open-source"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-green-200">lock_open</i><h3>Open source</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="scrum"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-cyan-200">playlist_add_check</i><h3>Transparent</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="scrum"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-blue-200">date_range</i><h3>Scrum</h3>
                <div>
                  <p>Sed ut perspiciatis <router-link to="/services">project management</router-link> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
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
