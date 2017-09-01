import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: true
    },
    mutations: {
        increment(state,msg) {
            state.count=msg
        }
    },
    actions: {
        //使得mutations能够实现异步调用，实现例如延迟调用
        increments({ state, commit }, payload) {
            commit('increment', payload)
        }
    }
})

export default store