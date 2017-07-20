import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

var store = new Vuex.Store({
	state: {
		lockScreen: true,
		timeRecords: []
	},
	mutations,
	actions
})
