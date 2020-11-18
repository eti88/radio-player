export const state = () => ({
  currentTrack: null
})

export const getters = {
  currentTrack: state => {
    return state.currentTrack
  }
}

export const mutations = {
  setCurrentTrack: (state, payload) => {
    state.currentTrack = payload
  }
}
