import {
	ContactsService
} from "@/common/api.service";

import {
	CONTACTS_SEND,
	CONTACTS_START,
	CONTACTS_END
} from "./actions.type";

import {
	CONTACTS_SET	
} from "./mutations.type";

const state = {
  name: '',
  phone: '',
  message: '',
  response: null,
  code: 0
};

const getters = {
	name() {
		return state.name;
	},
  phone() {
	  return state.phone;
  },
  message() {
    return state.message;
  },
  response() {
	  return state.response;
  }
};

const actions = {
  [CONTACTS_SEND]({ commit }, params) {
    commit(CONTACTS_START, params);
    return ContactsService.get(params)
      .then(({ data }) => {
        commit(CONTACTS_END, data);
      })
      .catch(err => {
        commit(CONTACTS_END, {
          code: 400,
          message: 'smth went wrong',
        });
        throw new Error(err);
      });
  }
};

const mutations = {
  [CONTACTS_START](state, { name, phone, message }) {
		state.name = name;
		state.phone = phone;
		state.message = message;
    // wait for response
  },

  [CONTACTS_END](state, { code, message }) {
    state.code = code;
    state.response = message;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
