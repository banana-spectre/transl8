<template>
    <div class="container flex justify-center items-center max-h-80">
      <Pie :data="chartData" />
    </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'PieChart',
    components: { Pie },
    data: () => ({
        loaded: false,
        chartData: null
    }),
    props: {
            sentimentScore: Object
        },
    data () {
        return {
            chartData: {
                labels: this.sentimentScore ? ['Negative', 'Neutral', 'Positive'] : ['None'],
                datasets: [{
                    backgroundColor: this.sentimentScore ? ['#f43f5e', '#eab308', '#22c55e'] : ['#94a3b8'],
                    data: this.sentimentScore ? [this.sentimentScore.neg * 100, this.sentimentScore.neu * 100, this.sentimentScore.pos * 100] : [100],
                    borderWidth: this.sentimentScore ? [2,2,2] : [0] 
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    }
}
</script>