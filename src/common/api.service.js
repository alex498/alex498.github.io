import Vue from "vue"; 
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from '@/common/config';

const ApiService = {
 init() {
  },
 get() {
	return new Promise(function(resolve, reject) {
    resolve({
      data: {
        code: 200,
        message: 'Greetings, all working fine'
      }
    });
    reject({
      code: 400,
      message: 'smth went wrong'
    });
  });
 }
};

export default ApiService;

export const ContactsService = {
 get(slug) {
	 return ApiService.get().catch(err => {
		 throw new Error(err);
	 });
 }
};
