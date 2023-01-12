<template>
  <div class="flex flex-col min-h-screen justify-between">
    <div class="flex lg:h-28">
      <Hero />
    </div>
    <div class="flex flex-col w-full mb-0 justify-between">
      <div class="flex-col w-full mt-3 lg:top-[25rem] flex lg:flex-row">
        <TextArea @translation="translate" @sentiment="sentiment" :toggleLoading="toggleLoading" />
        <Result
          :englishTranslation="englishTranslation"
        />
      </div>
      <div class="w-full mt-5 mb-8 lg:mb-1">
        <SentimentResult :sentimentScore=sentimentScore />
      </div>
      <LoadingModal v-if="isLoading"/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Hero from "./components/Hero.vue"
  import TextArea from "./components/TextArea.vue"
  import Result from "./components/Result.vue"
  import LoadingModal from "./components/LoadingModal.vue"
  import Footer from "./components/Footer.vue"
  import SentimentResult from "./components/SentimentResult.vue"
  
  export default {
    components: {
      Hero,
      TextArea,
      Result,
      LoadingModal,
      Footer,
      SentimentResult
    },
    methods: {
      translate(n) {
        this.englishTranslation=n
      },
      sentiment (n) {
        this.sentimentScore=n
      },
      toggleLoading () {
        this.isLoading = !this.isLoading
      }
    },
    data() {
      return {
        englishTranslation: null,
        sentimentScore: null,
        isLoading: false
      }
    }
  }
</script>
