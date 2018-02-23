<template>
    <div>
        <v-layout row wrap>
            <h1 class="display-1">{{title}}</h1>
            <v-flex xs12>
                <v-flex xs4>
                    <v-text-field
                    name="input-1-3"
                    label="Search"
                    single-line
                    prepend-icon="search"
                    ></v-text-field>
                </v-flex>
            </v-flex>
             <v-flex
                    xs3
                    v-for="item in colleges"
                    :key="item.name"
            >
            <v-card>
                <v-card-title primary-title>
                    <div class="headline">{{item.name}}</div>
                </v-card-title>
                <v-card-media
                    :src="item.src"
                    height="200px"
                >
                </v-card-media>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>visibility</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
                
       
        <v-tooltip top>
             <v-btn
                slot="activator"
                fab
                bottom
                right
                color="blue"
                dark
                fixed
                >
                <v-icon>add</v-icon>
            </v-btn>
            <span>Add College</span>
        </v-tooltip>
    </div>
</template>
<script>
    export default {
        computed:{
            sideMenu (){
				return this.$store.state.sideMenu
            },
            colleges () {
                return this.$store.state.colleges
            }
		},
        data () {
            return {
                title : 'College Admin',
            }
        },
        created (){
            this.$store.dispatch('getColleges')
        }
    }
</script>
<style>
    h1 {
        margin: 15px 0;
    }
</style>


