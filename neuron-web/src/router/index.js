import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CollegesAdmin from '../pages/collegesAdmin/CollegesAdmin'
import CollegeAdd from '../pages/collegeAdd/CollegeAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/colleges-admin',
      name: 'CollegesAdmin',
      component: CollegesAdmin
    },
    {
      path: '/college-add',
      name: 'CollegeAdd',
      component: CollegeAdd
    }
  ],
  mode:'history'
})
