import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import gql from 'graphql-tag'
//Used files 
import client from '../apolloServer'
//Graphql query schemas 
import getColleges from '../schemas/getColleges'
import userVerification from '../schemas/userVerification'
import userLogin from '../schemas/userLogin'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count:0,
        sideMenu: true,
        menu:[
            { icon: 'home', text: 'home', url:'/' },
            { icon: 'account_balance', text: 'Colleges Admin', url:'/colleges-admin' },
        ],
        colleges:[],
        selectUser:{
        },
        alert:false
    },
    mutations: {
        decrement: state => state.count--,
        displayMenu (state,data){
            state.sideMenu = data
            return state.sideMenu
        },
        collegesMutation (state,newValue){
            state.colleges = newValue;
        },
        userMutation (state,newValue){
            state.selectUser = newValue
        },
        alertMutation (state, value){
            console.log(value)
            state.alert = value
        }
    },
    actions :{
        getColleges: context => {
            client.query(
               {query: getColleges}
                )
                .then(data => {
                    context.commit('collegesMutation',data.data.collegeMany)
                })
                .catch(error => console.error(error))
        },
        validate (context, user){
            client.query({query: userLogin(user)})
                 .then(data => {
                     context.commit('userMutation',data.data.userOne)
                 })
                 .catch(error => console.error(error)) 
        },
        alertAction (context){
            context.commit('alertMutation',true)
        }
    },
    plugins: [createPersistedState()]
  })

const validate = function(){
    client.query(
        {query: userVerification()}
    )
    .then(data =>{
        console.log(data)
        return true
    })
    .catch(error => 
       {
        console.log(error)
        return false
    })
}
export default store