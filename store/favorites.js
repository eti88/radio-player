export const state = () => ({
  radios: []
})

export const getters = {
  radios: state => {
    return state.radios
  }
}

export const mutations = {
  SET_RADIOS: (state, payload) => {
    state.radios = payload
  }
}

export const actions = {
  addRadio({ state, commit }, { name, picture, stream_url, city, country, stream_type, genres }) {
    const radio = {
      name, picture, stream_url, city, country, stream_type, genres
    }

    const radios = [...state.radios]
    const presentRadio = radios.find(r => r.stream_url === radio.stream_url)

    if (presentRadio === undefined) {
      radios.unshift(radio);
      commit('SET_RADIOS', radios.slice(0, 25))
    }
  },

  removeRadio({ state, commit }, { stream_url }) {
    const radios = [...state.radios]
    const presentRadio = radios.find(r => r.stream_url === stream_url)

    if (presentRadio !== undefined) {
      radios.splice(radios.indexOf(presentRadio), 1);
      commit('SET_RADIOS', radios)
    }
  },

  clear({ commit }) {
    commit('SET_RADIOS', [])
  }
}
