<template>
<div>
	<div class="container">
		<div v-if="response" class="alert alert-success mt-3">{{ response }}</div>		
		<div class="row" >
			<div class="offset-md-4 col-md-4">
				<b-form @submit="onSubmit(form.name, form.phone, form.message)">
					<b-form-group id="name-field" label="Ваше имя:" label-for="name">
						<b-form-input id="name" type="text" v-model="form.name" :state="!$v.form.name.$invalid" aria-describedby="NameCheck"  placeholder="Name" />
						<b-form-invalid-feedback id="NameCheck">
							Это обязательное поле, которое должно быть не короче 3 символов.
						</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group id="phone-field" label="Номер телефона:" label-for="phone">
						<b-form-input id="phone" type="text" v-model="form.phone" :state="!$v.form.phone.$invalid" aria-describedby="NameCheck"  placeholder="Phone" />
						<b-form-invalid-feedback id="PhoneCheck">
							Это обязательное поле, которое должно содержать Российский номер телефона.
						</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group id="phone-field" label="Сообщение:" label-for="message">
						<b-form-textarea v-model="form.message" :state="!$v.form.message.$invalid" aria-describedby="MsgCheck"  placeholder="Message"></b-form-textarea>
						<b-form-invalid-feedback id="MsgCheck">
							Сообщение долно содержать не больше 250 символов
						</b-form-invalid-feedback>
					</b-form-group>
					<b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Отправить сообщение</b-button>
				</b-form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength,minLength,helpers } from "vuelidate/lib/validators";
import { CONTACTS_SEND } from "@/store/actions.type";
import { mapState } from 'vuex';

const phone = helpers.regex('phone', /^((7|8|\+7)+([0-9]){10})$/)

export default{
	name: 'ContactPage',
	data() {
		return {
		form: {}
		}
	},
	mixins: [
		validationMixin
  ],
  validations: {
		form: {
			name: {
				required,
        minLength: minLength(3)
			},
			phone: {
				required,
				phone,
				maxLength: maxLength(12)
     },
     message: {
        maxLength: maxLength(250)
      }
    }
  },
	methods:{
		onSubmit(name, phone, message) {
			this.$store.dispatch(CONTACTS_SEND, {name, phone, message})
		}
	},
	mounted() {
		this.name = this.$store.state.contacts.name;
		this.phone = this.$store.state.contacts.phone;
		this.message = this.$store.state.contacts.message;
		console.log(this.$store.state);
	},
	computed:{
		...mapState({
			response: state => state.contacts.response
		})
	}
}
</script>