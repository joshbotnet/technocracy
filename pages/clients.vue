<template>
  <div>

    <!-- <v-btn color="primary">Primary button</v-btn>
    <div class="links">
      <v-btn flat href="https://nuxtjs.org/" target="_blank">Documentation</v-btn>
      <v-btn flat dark color="primary" href="https://github.com/nuxt/nuxt.js" target="_blank">GitHub</v-btn>
    </div> -->
    <v-container fluid grid-list-md>
      <!-- <div class="page-bg page-pg-home"><i class="material-icons page-bg-icon-md">person</i></div> -->
      <v-layout row wrap>

        <v-flex xs12 sm12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="pa-0" id="clients">
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <h2>Clients</h2>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  <div class="anchor-list">
                    <ul>
                      <li><router-link to="/clients#government">Government</router-link></li>
                      <li><router-link to="/clients#commercial">Commercial</router-link></li>
                      <li><router-link to="/clients#academic">Academic</router-link></li>
                      <li><router-link to="/clients#community">Community</router-link></li>
                    </ul>
                  </div>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="government"></a>
          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="center"><i class="material-icons heading-icon heading-icon-md color-red-200">account_balance</i><h3>Government</h3></div>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="commercial"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="center"><i class="material-icons heading-icon heading-icon-md color-indigo-200">store</i><h3>Commercial</h3></div>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="academic"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="center"><i class="material-icons heading-icon heading-icon-md color-light-green-200">local_library</i><h3>Academic</h3></div>
                <div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <!-- <div v-text="item.id"></div> -->
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg4 xl3 class="pa-0"><a class="named-anchor" id="community"></a>

          <v-card height="100%">
            <v-card-title primary-title>
              <div>
                <div class="center"><i class="material-icons heading-icon heading-icon-md color-amber-200">local_florist</i><h3>Community</h3></div>
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
