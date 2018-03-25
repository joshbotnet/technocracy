<template>
  <div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>
      <!-- <div class="page-bg page-pg-home"><i class="material-icons page-bg-icon-md">phone_in_talk</i></div> -->
      <v-layout row wrap>

        <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-0" id="contact">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-deep-orange-200">mail_outline</i><h2>Contact</h2>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  <div class="anchor-list">
                    <ul>
                      <li><router-link to="/contact#contact-details">Contact details</router-link></li>
                      <li><router-link to="/contact#map">Map</router-link></li>
                      <li><router-link to="/contact#enquiries">Enquiries</router-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="contact-details"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-cyan-200">phone_in_talk</i><h3>Details</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="map"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-green-200">place</i><h3>Locations</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="enquiries"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-blue-grey-200">send</i><h3>Enquiries</h3>
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
