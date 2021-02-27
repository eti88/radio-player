import Client from "@/lib/btsg-ws";

export const state = () => ({
  coins: []
})

export const mutations = {
  setCoins: (state, payload) => {
    state.coins = payload
  },
}

export const getters = {
  balance: state => {
    return state.coins.find(c => c.denom === process.env.MICROSTAKEDENOM) || { denom: process.env.MICROSTAKEDENOM, amount: 0 }
  },
  coins: state => {
    return state.coins
  },
}

export const actions = {
  async updateBalance({
    commit, rootGetters
  }) {
    try {
      const address = rootGetters['wallet/address']

      if (address !== null) {
        const response = await this.$btsg.getAccount(address)
        commit('setCoins', response.value.coins)
      }
    } catch (e) {
      console.error(e)
    }
  },
  subscribe({
    dispatch, rootGetters
  }) {
    try {
      const address = rootGetters['wallet/address']

      const client = new Client(
        process.env.CHAIN_ID,
        process.env.SOCKET
      );

      client.subscribe(
        {
          query:
            `transfer.recipient='${address}'`
        },
        response => {
          dispatch('updateBalance')
        }
      );

      client.subscribe(
        {
          query:
            `transfer.sender='${address}'`
        },
        response => {
          dispatch('updateBalance')
        }
      );
    } catch (e) {
      console.error(e)
    }
  }
}
