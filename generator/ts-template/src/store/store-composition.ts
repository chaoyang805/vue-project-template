import {wrapStore} from 'vuex-composition-helpers'
import store from './state'
const {createNamespacedHelpers, useActions, useGetters, useMutations, useState} = wrapStore(store)

export {createNamespacedHelpers, useActions, useGetters, useMutations, useState}
