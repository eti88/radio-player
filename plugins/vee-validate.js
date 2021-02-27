import Vue from 'vue'
import { ValidationProvider, ValidationObserver, setInteractionMode, extend } from 'vee-validate'
import * as VeeValidate from 'vee-validate'
import BigNumber from 'bignumber.js'
/* eslint-disable-next-line camelcase */
import { required, confirmed, max, min, min_value, max_value, integer, regex } from 'vee-validate/dist/rules.umd.min.js'

extend('required', required)
extend('integer', integer)
extend('min', min)
extend('max', max)
extend('confirmed', confirmed)
/* eslint-disable-next-line camelcase */
extend('min_value', min_value)
/* eslint-disable-next-line camelcase */
extend('max_value', max_value)
extend('regex', regex)

extend('decimals', {
  validate(value, args) {
    const decimals = new BigNumber(value).decimalPlaces()

    if (args[0] === null || args[0] === undefined) {
      return decimals >= 0
    }

    return decimals <= args[0]
  }
})

Vue.use(VeeValidate, { inject: false })
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
setInteractionMode('lazy')
