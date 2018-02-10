import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  task: {},
  detailsVisibility: false,
  navTitle: 'Inbox',
  navId: '1'
}

const mutations = {
  SETTASK (state, task) {
    state.task = task
  },
  SETDETAILSVISIBILITY (state, visibility) {
    state.detailsVisibility = visibility
  },
  SETNAVTITLE (state, title) {
    state.navTitle = title
  },
  SETNAVID (state, id) {
    state.navId = id
  }
}

const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
