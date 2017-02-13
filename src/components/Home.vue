<template>
    <main class="start-page">
      <section style="width: 60%;">
        <h1 class="u-text-center">Welcome to <span class="u-violet u-bold">FAKTURKI!</span><span class="u-text-xs u-top"> ©</span></h1>
        <form class="start-page-form">
          <fieldset class="start-page-form-fieldset">
            <legend class="start-page-form-legend">Your FIREBASE url:</legend>
            <input class="start-page-form-input" type="text" v-model="userInput" />
            <button class="start-page-form-button" type="submit" @click="submitFirebaseUrl">
            </button>
          </fieldset>
          <transition appear name="slide-fade" mode="out-in">
            <p v-if="fireBaseVerified" class="start-page-firebase-logged">Firebase ready</p>
          </transition>
        </form>
      </section>
    </main>
</template>
<script>
  export default {
    data: function () {
      return {
        userInput: ''
      }
    },
    computed: {
      fireBaseVerified () {
        return this.$store.getters.fireBaseVerified
      },
      firebaseUrl () {
        return this.$store.getters.fireBaseUrl
      }
    },
    methods: {
      submitFirebaseUrl (e) {
        e.preventDefault()
        if (this.userInput.match(/firebaseio/g)) {
          this.$store.dispatch('checkFirebaseConnection', true)
          this.$store.dispatch('setFirebaseUrl', this.userInput)
        } else {
          this.$store.dispatch('checkFirebaseConnection', false)
        }
      }
    }
  }
</script>
