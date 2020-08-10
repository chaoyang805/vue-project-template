import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import state, {IRootState} from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)
export default new Vuex.Store<IRootState>({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV === 'development',
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
})
