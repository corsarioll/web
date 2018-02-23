// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routes from './router'
import Vuetify from 'vuetify'
import style from  '../node_modules/vuetify/dist/vuetify.min.css'

import Vuex from 'vuex'
import VueRouter from 'vue-router'  
// Server client dependencies 

// Used files 
import store from './store/store'
import apolloProvider from './apollo'
import client from './apolloServer'

/*Used dependencies*/
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Routes,
  store,
  apolloProvider,  
  components: { App },
  template: '<App/>'
})
