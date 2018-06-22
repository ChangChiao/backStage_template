
<script>
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

export default {
  name:'chart',
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: 'transparent',
          borderColor: "#7ed321",
          data: [7000, 6500, 5000, 7000, 5500, 6000,7000]
        },
        {
          label: 'Data Two',
          backgroundColor: 'transparent',
          borderColor:'#4a90e2',
          data: [6000, 5000,2000, 4000, 3500, 5000, 6000]
        },
        {
          label: 'Data Three',
          backgroundColor: 'transparent',
          borderColor:'#f87979',
          data: [500, 500, 2000, 3000, 3000, 1000, 2000]
        },
      ]
    },{responsive: true, maintainAspectRatio: false})
  }
}
</script>

<style scoped lang="scss">

</style>
