<template>
  <form>
    <div class="form__title_wrap">
      <img class="form__title_img" src="~/assets/img/Mailbox.svg" alt="img" />
      <h2 class="form__title">Расскажите о вашем проекте:</h2>
    </div>
    <div class="input__wrap">
      <div class="input__group">
        <input
          class="input"
          id="name"
          name="name"
          type="text"
          placeholder="Ваше имя*"
          v-model="form.name"
          @input="v$.name.$touch()"
        />
        <label class="input__label" for="name"> Ваше имя* </label>
        <p v-if="v$.name.$dirty && v$.name.required.$invalid" class="form__error"></p>
        <p v-if="v$.name.$dirty && v$.name.alpha.$invalid" class="form__error">Некорректное имя</p>
      </div>
      <div class="input__group">
        <input
          class="input"
          id="email"
          name="email"
          type="text"
          placeholder="Email*"
          v-model="form.email"
          @input="handleInputEmail"
        />
        <label class="input__label" for="email"> Email* </label>
        <p v-if="v$.email.$dirty && v$.email.required.$invalid" class="form__error">
          Обязательное поле
        </p>
        <p v-if="v$.email.$dirty && v$.email.email.$invalid" class="form__error">
          Некорректный e-mail
        </p>
        <p v-if="err.email.length > 0" class="form__error">{{ err.email }}</p>
      </div>
      <div class="input__group">
        <input
          class="input"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Телефон*"
          v-model="form.phone"
          @input="handleInputPhone"
        />
        <label class="input__label" for="phone">Телефон* </label>
        <p v-if="v$.phone.$dirty && v$.phone.$invalid" class="form__error">Некорректный номер</p>
        <p v-if="err.phone.length > 0" class="form__error">{{ err.phone }}</p>
      </div>
    </div>
    <div class="input__group">
      <textarea
        class="textarea"
        id="message"
        cols="30"
        rows="10"
        placeholder="Сообщение*"
        v-model="form.message"
        @input="v$.message.$touch()"
      ></textarea>
      <label class="input__label" for="message"> Сообщение* </label>
    </div>
    <div class="checkbox__wrap">
      <label for="checkbox">
        <input
          class="checkbox"
          type="checkbox"
          id="checkbox"
          v-model="form.checkbox"
          @input="v$.checkbox.$touch()"
        />
        <span class="checkmark"></span>
        Согласие на обработку персональных данных
      </label>
    </div>
    <button class="form__btn" type="submit" @click.prevent="submitForm">Обсудить проект</button>
    <div class="consent">
      <span class="consent__text">
        Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
      </span>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, alpha } from '@vuelidate/validators';
import axios from 'axios';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  checkbox: true,
});

const clearServerError = () => {
  err.value = {
    email: '',
    phone: '',
  };
};

const rules = {
  name: { required, alpha },
  email: { required, email },
  phone: {
    validPhone(phone) {
      const pattern = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
      return pattern.test(phone);
    },
  },
  message: { required },
  checkbox: {
    valid(value) {
      return value;
    },
  },
};

const err = ref({
  email: '',
  phone: '',
});

const v$ = useVuelidate(rules, form);

const handleInputEmail = () => {
  v$.value.email.$touch()
  clearServerError()
}

const handleInputPhone = () => {
  v$.value.phone.$touch()
  clearServerError()
}

const submitForm = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
      await axios.post('https://api.test.cyberia.studio/api/v1/feedbacks', {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
      })
    } catch (error) {
      err.value.email = error.response.data.errors.email.toString();
      err.value.phone = error.response.data.errors.phone.toString();
    }
  }
};
</script>

<style lang="scss">
.form__title {
  margin-top: 65px;
  margin-bottom: 65px;
  font-size: 48px;
}

.form__error {
  position: absolute;
  left: 10px;
  bottom: -14px;
  font-size: 12px;
  color: tomato;
}

.form__title_img {
  display: none;
}

.form__title_wrap {
  display: flex;
}

.form__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 67px auto 108px;
  height: 62px;
  padding: 0 65px;
  border-radius: 85px;
  border: none;
  background-color: #2d76f9;
  color: white;
}

.input {
  width: 368px;
  height: 61px;
  border-radius: 8px;
  outline: 1px solid #eff3ff;
  background: none;
  border: none;
  padding: 10px 15px;
}

.input::placeholder {
  color: transparent;
}

.input__wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
}

.input:focus {
  outline: 1px solid #eff3ff;
}

.input__group {
  position: relative;
}

.input__label {
  position: absolute;
  top: -10px;
  left: 23px;
  padding: 0 10px;
  z-index: 10;
  background-color: #2f2f3d;
  color: #eff3ff;
}

.textarea {
  width: 1240px;
  height: 139px;
  padding: 10px 15px;
  border-radius: 8px;
  outline: 1px solid #eff3ff;
  background: none;
  border: none;
  resize: none;
}

.textarea::placeholder {
  color: transparent;
}

.checkbox {
  visibility: hidden;
  height: 0;
  width: 0;
}

.checkbox__wrap input ~ .checkmark {
  background-color: none;
}

.checkbox__wrap input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox__wrap input:checked ~ .checkmark:after {
  display: block;
}

.checkbox__wrap .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox__wrap {
  display: block;
  position: relative;
  padding: 4px 32px;
  margin-bottom: 12px;
  margin-top: 40px;
  font-size: 18px;
  color: #eff3ff;
  font-weight: 400;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 2px solid #eef3ff;
  border-radius: 2px;
}

.consent {
  display: none;
  margin: 0 auto 108px;
  width: 247px;
  &__text {
    color: rgb(238, 243, 255);
    font-family: Open Sans, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
  }
}

@media screen and (max-width: 1280px) {
  .input {
    width: 100%;
    margin-bottom: 30px;
  }

  .input__wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 22px;
  }

  .input__group {
    width: 100%;
  }

  .input__group {
    position: relative;
  }
  .textarea {
    width: 100%;
  }

  .form__error {
    bottom: 16px;
    left: 10px;
  }
}

@media screen and (max-width: 425px) {
  .form__title {
    font-size: 24px;

    &_wrap {
      max-width: 350px;
      margin: 0 auto;
    }
  }
  .form__title_img {
    display: flex;
    margin-right: 28px;
  }

  .input {
    width: 100%;
    height: 52px;
  }

  .input::placeholder {
    color: #eef3ff;
    font-size: 13px;
  }

  .input:focus + .input__label {
    display: none;
  }

  .textarea:focus + .input__label {
    display: none;
  }

  .input__label {
    display: none;
    // top: 17px;
    // left: 13px;
    // font-size: 13px;
  }

  .textarea {
    width: 100%;
    height: 139px;
  }

  .textarea::placeholder {
    color: #eef3ff;
    font-size: 13px;
  }

  .input__group {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .checkbox__wrap {
    display: none;
  }
  .consent {
    display: flex;
  }
}
</style>
