import { PLAYER_STATUS } from '@/lib/utils'

export const state = () => ({
  status: PLAYER_STATUS.READY,
  currentTrack: null,
  currentTime: 0
})

export const getters = {
  ready: state => {
    return state.status === PLAYER_STATUS.READY
  },
  loading: state => {
    return state.status === PLAYER_STATUS.LOADING
  },
  playing: state => {
    return state.status === PLAYER_STATUS.PLAY
  },
  paused: state => {
    return state.status === PLAYER_STATUS.PAUSE
  },
  currentTrack: state => {
    return state.currentTrack
  },
  currentTime: state => {
    return state.currentTime
  }
}

export const mutations = {
  SET_LOADING: (state, payload) => {
    state.loading = payload
  },
  SET_CURRENT_TRACK: (state, payload) => {
    state.currentTrack = payload
  },
  SET_STATUS: (state, payload) => {
    state.status = payload
  }
}

export const actions = {
  setCurrentTrack({ commit, dispatch }, payload) {
    let track

    if (payload.type === 'radio') {
      track = {
        type: 'radio',
        cover: payload.picture,
        title: payload.name,
        subtitle: `${payload.city.name}, ${payload.country.name}`,
        source: payload.stream_url,
        isHls: payload.stream_type === "hls",
      }
    }

    if (payload.type === 'podcast') {
      track = {
        type: 'podcast',
        cover: payload.picture,
        title: payload.title,
        subtitle: payload.subtitle,
        source: payload.streamUrl,
        isHls: false,
      }
    }

    commit('SET_CURRENT_TRACK', track)

    //dispatch('recent/addRadio', payload, { root: true })
  },

  stop({ commit }) {
    commit('SET_STATUS', PLAYER_STATUS.READY)
  },

  pause({ commit }) {
    commit('SET_STATUS', PLAYER_STATUS.PAUSE)
  },

  play({ commit }) {
    commit('SET_STATUS', PLAYER_STATUS.PLAY)
  },

  ready({ commit }) {
    commit('SET_STATUS', PLAYER_STATUS.READY)
  },
  destroy({ commit }) {
    commit('SET_STATUS', PLAYER_STATUS.READY)
    commit('SET_CURRENT_TRACK', null)
  }
}
