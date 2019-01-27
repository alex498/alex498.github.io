import Vue from "vue"; 
import Vuex from 'vuex';
import contacts from "./contacts.module"

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{contacts}	
})