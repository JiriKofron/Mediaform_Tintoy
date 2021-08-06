<template>
  <q-form @submit.prevent="onSubmit" class="q-gutter-md form flex">
    <q-input
      v-model.trim="$v.user.firstname.$model"
      label="Enter your first name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />
    <q-input
      v-model.trim="$v.user.lastname.$model"
      label="Enter your last name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      type="email"
      v-model.trim="$v.user.email.$model"
      label="Enter your email"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Please type something',
        isValidEmail,
      ]"
    />

    <q-input
      v-model.trim="$v.user.date.$model"
      mask="date"
      :rules="['date']"
      label="Select date"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date v-model.trim="$v.user.date.$model">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-form>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import axios from 'axios';

export default {
  name: 'Cartcontact',
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        date: '',
      },
    };
  },
  validations: {
    user: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      email: {
        required,
      },
      date: {
        required,
      },
    },
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || 'Invalid email';
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log('chyba');
        console.log(this.$v.$invalid);
        alert('nelze odeslat!');
      } else {
        console.log(this.user);
        this.$store.commit('addContact', this.user);
        axios({
          method: 'GET',
          url: '/',
          data: {
            products: this.$store.state.products,
            customerInfo: this.$store.state.contactDetails,
          },
        }).then(function (response) {
          console.log(response);
          alert('jou voe gut');
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixin.scss';

.form {
  align-items: center;
  margin-top: 2.5rem;
}

.q-input {
  width: 85%;
  min-width: 20.5rem;
  .q-field__native,
  .q-field__append {
    background: white;
    border-radius: 6px;
    padding: 0 1rem;
  }
}
</style>
