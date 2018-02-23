<template>
    <v-snackbar
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="alert"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        computed:{
            alert: {
                get () {
                return this.$store.state.alert
                },
                set (value) {
                this.$store.commit('alertMutation', value)
                }
            }
		},
        data () {
            return {
                snackbar: false,
                color: '',
                mode: '',
                timeout: 1500,
                text: 'Hello, I\'m a snackbar'
            }
        },
        created (){
        }
    }
</script>