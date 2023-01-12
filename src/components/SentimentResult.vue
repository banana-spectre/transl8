<template>
    <div class="flex flex-col mx-5 mt-3 lg:mt-0 lg:mr-0">
        <p class="font-actor font-bold px-4 text-lg">SENTIMENT ANALYSIS</p>
        <div class="flex flex-col lg:flex-row w-full justify-center items-center
        ">
            <div class="bg-white rounded-xl my-5 mx-5 min-h-[8rem] p-4 text-black w-80 lg:w-72 ">
                <PieChart :sentimentScore=sentimentScore :key="pieChartComponent" />
            </div>
            <div class="lg:w-[50rem] text-center lg:text-left">
                <h1 v-if="!sentimentScore" class="font-bold text-xl lg:text-xl">No sentiment results yet.</h1>
                <h1 v-else-if="sentimentScore && sentimentScore.compound >= 0.05" class="font-bold text-[30] lg:text-xl">
                    Sentence gives a <div class="inline-block text-green-600">Positive</div> statement.
                </h1>
                <h1 v-else-if="sentimentScore.compound <= -0.05" class="font-bold text-[30] lg:text-xl">Sentence gives a <div class="inline-block text-red-600">Negative</div> statement.
                </h1>
                <h1 v-else="!sentimentScore.compound >= 0.05 && !sentimentScore.compound <= -0.05" class="font-bold text-[30] lg:text-xl">
                    Sentence gives a <p class="inline-block text-yellow-600">Neutral</p> statement.
                </h1><br />
                <h2>Sentence is rated as: </h2>
                <h3>{{ sentimentScore?(sentimentScore.neg * 100).toFixed(2) : 0.0 }} % Negative</h3>
                <h3>{{ sentimentScore?(sentimentScore.neu * 100).toFixed(2) : 0.0 }} % Neutral</h3>
                <h3>{{ sentimentScore?(sentimentScore.pos * 100).toFixed(2) : 0.0 }} % Positive</h3>
            </div>
            <div class="hidden lg:block text-right w-[90rem] h-80 pt-14 pr-8 lg:bg-gradient-to-l lg:from-purple-200">
                <p class="text-6xl font-century-gothic font-bold">
                    Bridging Conversational Gaps.
                </p>
                <br />
                <p class="font-poppins">
                    Welcome to Transl8. <br/> A Tagalog Internet Speech to English Translator. <br/> Allowing people around the world to dive into the Filipino Internet.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import PieChart from "./PieChart.vue"
export default {
    data() {
        return {
            pieChartComponent: 0
        }
    },
    components: {
        PieChart
    },
    props: {
        sentimentScore: Object
    },
    watch: {
        sentimentScore(to, from) {
            this.pieChartComponent += 1
        }
    }
}
</script>