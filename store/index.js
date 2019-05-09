import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0
  },
  actions: {
    incrementMutations(context) {
      context.commit('increment')
    },
    reductionMutations(context) {
      context.commit('reduction')
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    reduction(state) {
      state.counter--
      if(state.counter<0){
      	state.counter=0
      	alert('不能再减了')
      	return false
      }
    }
  }
})

export default store
