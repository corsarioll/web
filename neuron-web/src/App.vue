<template>
  <v-app id="inspire">
    <app-side-menu :display="sideMenu"></app-side-menu>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="showMenu()"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Neuron</span>
      </v-toolbar-title>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
    <app-login></app-login>
    <app-alert></app-alert>

  </v-app>
</template>

<script>
  import login from './components/login/login.vue'
  import alert from './components/Alert/Alert.vue'
  import sideMenu from './components/SideMenu/SideMenu'
  //map actions an getters 
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  
  export default {
    computed:{
			sideMenu (){
				return this.$store.state.sideMenu
      },
			...mapMutations([
				'displayMenu',
    	])
		},
    components:{
      "app-login":login,
      "app-side-menu":sideMenu,
      "app-alert":alert
		},
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'Labels',
            model: true,
            children: [
              { icon: 'add', text: 'Create label' }
            ]
          }
      ]
    }),
    methods:{
      showMenu (){
        var display = !this.sideMenu
        this.$store.commit('displayMenu',display)
      }
    },
  }
</script>