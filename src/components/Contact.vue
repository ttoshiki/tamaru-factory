<template>
  <transition name="color-fill">
    <form class="contact" v-if="isShownForm">
      <h1 class="contact__heading">Contact</h1>
      <hr class="contact__divider" />
      <p class="contact__paragraph">
        お仕事のご相談・ご依頼は以下のフォームを入力の上、お問い合わせください。
      </p>
      <div class="contact__form">
        <div class="contact__item">
          <label for="name" class="contact__label">お名前</label>
          <div class="contact__inputItems">
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              v-model="name"
              class="contact__input"
            />
            <p v-if="hasError.name" class="contact__invalidMessage">
              名前を入力してください。
            </p>
          </div>
        </div>
        <div class="contact__item">
          <label for="mail" class="contact__label">メールアドレス</label>
          <div class="contact__inputItems">
            <input
              type="text"
              id="email"
              name="mail"
              autocomplete="email"
              v-model="mailAddress"
              class="contact__input"
            />
            <p v-if="hasError.mailAddress" class="contact__invalidMessage">
              メールアドレスの形式が正しくありません。
            </p>
          </div>
        </div>
        <div class="contact__item">
          <label for="message" class="contact__label">お問い合わせ内容</label>
          <div class="contact__inputItems">
            <textarea
              id="message"
              name="message"
              v-model="message"
              class="contact__input"
            ></textarea>
            <p v-if="hasError.message" class="contact__invalidMessage">
              お問い合わせ内容を入力してください。
            </p>
          </div>
        </div>
        <button
          type="submit"
          name="button"
          ref="button"
          class="contact__submitButton"
          @click="submitData"
        >
          送信
        </button>
      </div>
    </form>
    <div class="contact__success" v-else>
      <h2 class="contact__successHeading">Thank you</h2>
      <p class="contact__successParagraph">
        お問い合わせありがとうございます。2日以内に返信させていただきます。
      </p>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      isShownForm: true,
      name: '',
      mailAddress: '',
      message: '',
      hasError: {
        mailAddress: false,
        name: false,
        message: false
      }
    }
  },
  methods: {
    checkErros() {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      this.hasError.name = this.name === ''
      this.hasError.mailAddress = this.mailAddress === '' || !regex.test(this.mailAddress)
      this.hasError.message = this.message === ''
    },
    submitData(event) {
      event.preventDefault()
      this.checkErros()
      const errorKeys = Object.keys(this.hasError).filter(key => this.hasError[key])
      if (errorKeys.length > 0) {
        return
      }
      this.$refs.button.disabled = true
      const submitParams = new FormData()
      submitParams.append('entry.1657560199', this.name)
      submitParams.append('entry.276370508', this.mailAddress)
      submitParams.append('entry.1538949611', this.message)
      // CORSエラー対策
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const GOOGLE_FORM_ACTION =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc6PPpRFTZ4rOjtxQHH-DGSYnL3ENbe5XCVfV3nqxbhF0fQzQ/formResponse'
      axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams).then(res => {
        this.isShownForm = false
      })
    }
  }
}
</script>

<style lang="scss">
@use '../styles/variables';

.contact {
  margin: variables.$spacing-32x variables.$spacing-6x;

  &__heading {
    font-family: variables.$font-family-en;
    font-size: 64px;
    font-weight: variables.$font-weight-bd;
  }

  &__divider {
    border-color: variables.$divider-dark;
  }

  &__paragraph {
    margin: 80px 0;
  }

  &__item {
    display: flex;

    &:not(:first-of-type) {
      margin-top: variables.$spacing-6x;
    }
  }

  &__label {
    width: 160px;
  }

  &__inputItems {
    width: 78%;
  }

  &__input {
    width: 100%;
    max-width: 380px;
    padding: 0.5em;
    border: none;
  }

  &__invalidMessage {
    margin: variables.$spacing-1x 0 0;
    color: variables.$color-attention;
  }

  #name {
    width: 64%;
    max-width: 280px;
  }

  &__submitButton {
    width: 78%;
    max-width: 380px;
    padding: 12px 0;
    margin: variables.$spacing-6x 0 0 160px;
    color: variables.$color-light;
    text-indent: 8px;
    letter-spacing: 8px;
    background-color: variables.$color-primary-shade;
    border: none;
    transition: 0.2s background-color;

    &:hover {
      cursor: pointer;
      background-color: rgba($color: variables.$color-primary-shade, $alpha: 0.6);
    }

    &:disabled {
      cursor: default;
      background-color: rgba($color: variables.$color-primary-shade, $alpha: 0.6);
    }
  }

  &__success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    &.color-fill-enter-active {
      animation: color-fill 1.5s;
    }
  }

  &__successHeading {
    margin: variables.$spacing-2x 0;
    font-size: 80px;
    letter-spacing: 3px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: variables.$color-light;
  }

  &__successParagraph {
    color: variables.$color-light;
  }
}

@keyframes color-fill {
  0% {
    color: variables.$color-dark;
  }
  100% {
    color: variables.$color-light;
  }
}
</style>
