// store
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const todoStore = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})



export default todoStore