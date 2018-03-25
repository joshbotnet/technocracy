<template>
  <div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>
      <!-- <div class="page-bg page-pg-home"><i class="material-icons page-bg-icon-md">stars</i></div> -->
      <v-layout row wrap>

        <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-0" id="services">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-red-200">stars</i><h2>Services</h2>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  <div class="anchor-list">
                    <ul>
                      <li><router-link to="/services#interaction-design">Interaction design</router-link></li>
                      <li><router-link to="/services#graphic-design">Graphic design</router-link></li>
                      <li><router-link to="/services#project-management">Project management</router-link></li>
                      <li><router-link to="/services#web-development">Web development</router-link></li>
                      <li><router-link to="/services#hosting">Hosting</router-link></li>
                      <li><router-link to="/services#support">Support</router-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="interaction-design"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-teal-200">touch_app</i><h3>Interaction design</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="graphic-design"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-light-blue-200">visibility</i><h3>Graphic design</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="project-management"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-grey-400">trending_up</i><h3>Project management</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="web-development"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-brown-200">code</i><h3>Web development</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="hosting"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-pink-100">cloud_queue</i><h3>Hosting</h3>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="support"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <i class="material-icons heading-icon heading-icon-md color-lime-400">supervisor_account</i><h3>Support</h3>
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
