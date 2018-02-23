<template>
  <div>
    <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay='false'
      scrollable
    >
        <v-card>
            <v-layout row justify-center>
                <v-flex xs12 md3 class="verticalCenter"> 
                    <v-card-media :src="logo" height="200px">
                    </v-card-media>   
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                label="E-mail"
                                v-model="userLogin.email"
                                :rules="emailRules"
                                required
                            ></v-text-field>
                            <v-text-field
                                name="input-10-1"
                                label="Enter your password"
                                hint="At least 8 characters"
                                v-model="userLogin.password"
                                min="8"
                                required
                                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (e1 = !e1)"
                                :type="e1 ? 'password' : 'text'"
                                counter
                            ></v-text-field>
                            <v-btn @click="submit" :disabled="!valid" large>submit</v-btn>
                            <v-btn @click="clear" large>clear</v-btn>
                        </v-form>
                    
                    </v-card-text>
                </v-flex>  
            </v-layout>              
        </v-card>
    </v-dialog>
    </v-layout>
  </div>
</template>
<script>
    import imageUrl from '../../assets/logo.png'
    export default {
        computed:{
            colleges () {
                return this.$store.state.colleges
            },
            selectUser (){
                return this.$store.state.selectUser
            }
		},
        data () {
        return {
            dialog: true,
            notifications: false,
            sound: true,
            widgets: false,
            valid: false,
            logo:imageUrl,
            name: '',
            e1:true,
            userLogin:{
                password: '',
                email: '',
            },
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
            ],
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    this.dialog = false
                    this.$store.dispatch('validate',this.userLogin)
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        },
        created (){
            if (this.selectUser._id != undefined){
                this.dialog = false
            }
        }
  }
</script>
<style>
    .verticalCenter{
        position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
        width: 300px;
    }
</style>
