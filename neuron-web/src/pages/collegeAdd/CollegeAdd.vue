<template>
    <div>
        <h1 class="display-1">Add College</h1>
        <v-form v-model="valid" ref="form" lazy-validation>
        <v-layout row wrap>
            <v-flex xs4>
                <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
                ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                ></v-text-field>
            </v-flex>
        </v-layout>
                                
            <v-text-field
                name="input-2-3"
                label="Hint Text"
                prepend-icon="phone"
                v-model="phone"
                type="number"
                >
            </v-text-field>
            <v-select
            label="Item"
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            required
            ></v-select>
            <v-checkbox
            label="Do you agree?"
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            required
            ></v-checkbox>

            <v-btn
                @click="submit"
                :disabled="!valid"
            >
            submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        computed: {
            formIsValid () {
                return (
                this.form.first &&
                this.form.last &&
                this.form.favoriteAnimal &&
                this.form.terms
                )
            }
           
        },
        data () {
            return{
                valid: true,
                name: '',
                nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                email: '',
                emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                phone:'',
                select: null,
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4'
                ],
                checkbox: false
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                // Native form submission is not yet supported
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>
<style>

</style>

