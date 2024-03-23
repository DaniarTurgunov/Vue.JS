import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides: []
  },
  getters: {
    slides (state) {
      return state.slides
    }
  },
  mutations: {
    SET_SLIDES (state, slides) {
      state.slides = slides
    }
  },
  actions: {
    fetchSlides ({ commit }) {
      commit('SET_SLIDES', [
        {
          alt: 'image 1',
          url: 'slider_one.jpg'
        },
        {
          alt: 'image 2',
          url: 'slider_one.jpg'
        },
        {
          alt: 'image 3',
          url: 'slider_one.jpg'
        }
      ])
    }
  },

  modules: {
  }
})