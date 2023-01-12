<template>
    <div class="lg:w-full">
        <p class="px-8 w-ful font-actor font-bold text-xl">TAGALOG SENTENCE</p>
        <form @submit.prevent="handleSubmit()" class="w-full">
            <div class="px-8 w-full flex flex-col items-end">
                <textarea id="netspeak" rows=4 placeholder="Input text here." class="rounded-xl outline-none w-full border-purple-900 border-2 p-2 text-xl"
                @keydown.enter.exact.prevent="handleSubmit()"/>
                <button class="bg-fuchsia-900 text-white rounded-full px-5 py-2 mt-3 hover:bg-white border hover:border-purple-900 hover:text-purple-900">Translate</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import axiosRetry from 'axios-retry';

export default {
    props: {
        toggleLoading: Function
    },
    methods: {
        handleSubmit() {
            this.toggleLoading()
            axiosRetry(axios, {
                retries: 999,
                shouldResetTimeout: true,
                retryDelay: () => 3000,
                retryCondition: (error) => true,
            });

            axios.post("https://api-inference.huggingface.co/models/bananaspectre/marian-finetuned-tgl-eng-netspeak-trial9", {
                inputs: netspeak.value
            }, {
                headers: {"Authorization": "Bearer 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"},
            })
            .then((response)=>{
                this.$emit("translation", response.data[0].translation_text)
                axios.post("https://bananaspectre-vader-sentiment-analysis-rawr.hf.space/run/predict", {
                    data: [response.data[0].translation_text]
                })
                .then((response)=>{
                    const fixResponse = response.data.data[0].replaceAll("'", '"')
                    this.$emit("sentiment", JSON.parse(fixResponse))
                    setTimeout(() =>window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'}),
                    100);
                    this.toggleLoading()
                })
                .catch((error)=>{
                    console.log(error)
                })
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}

//for responsive, search @media in tailwind css
</script>