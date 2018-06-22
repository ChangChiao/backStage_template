<template>
<div class="wrapper-home">
  <main>
    <div class="title">
       <h2>OVERVIEW</h2>
       <div class="noUse"></div>
       <span>2018/6/6</span>
      <i class="fas fa-caret-right"></i>
       <span>2018/6/18</span>
      <select name="" id="">
        <option value="">choose</option>
      </select>
    </div>
    <div class="info">
      <div class="item">
        <i class="fas fa-money-check"></i>
        <span>TOTAL REVENUE</span>
        <h1 class="text-green">54,540</h1>
      </div>
      <div class="item">
        <i class="fas fa-archive"></i>
        <span>TOTAL COST</span>
        <h1 class="text-red">12,660</h1>
      </div>
      <div class="item">
        <i class="fas fa-money-check-alt"></i>
        <span>NET INCOME</span>
        <h1 class="text-blue">41,880</h1>
      </div>
    </div>
    <div class="graph">
      <h2>Activity</h2>
    <!--<compChart></compChart> -->
    <line-chart :width="400" :height="300"></line-chart>
    </div>
    <div class="twoWay">
      <div class="website">
        <h2>Transation Website</h2>
        <ul>
          <li>
            <i class="fab fa-facebook-square"></i>
            <span>facebook.com</span>
            <div class="noUse"></div>
            <h3>45,836</h3>
            <i class="fas fa-arrow-up text-green"></i>
            <h4 class="text-green">20%</h4>
          </li>
          <li>
            <i class="fab fa-google"></i>
            <span>google.com</span>
            <div class="noUse"></div>
            <h3>23,582</h3>
            <i class="fas fa-arrow-up text-green"></i>
            <h4 class="text-green">12%</h4>
          </li>
          <li>
            <i class="fas fa-shopping-bag"></i>
            <span>shopify.com</span>
            <div class="noUse"></div>
            <h3>2,489</h3>
            <i class="fas fa-arrow-down text-red"></i>
            <h4 class="text-red">30%</h4>
          </li>
          <li>
            <i class="fab fa-facebook-square"></i>
            <span>facebook.com</span>
            <div class="noUse"></div>
            <h3>1,057</h3>
            <i class="fas fa-arrow-down text-red"></i>
            <h4 class="text-red">15%</h4>
          </li>
        </ul>
      </div>
      <div class="orders">
      <h2>Latest Orders</h2>
      <ul>
        <li>
          <div class="img_box">
            <img src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="">
          </div>
          <div class="detail">
            <h2>Lorem, ipsum dolor.</h2>
            <i class="fas fa-clock"></i>
            <span>2018/6/13</span>
            <span>12:42</span>
            <h5> <i class="fas fa-male"></i>belle wills</h5>   
          </div>
          <div class="noUse"></div>
          <div class="total">
            <h6>total</h6>
            <h3>3200</h3>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="https://images.pexels.com/photos/762084/pexels-photo-762084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
          </div>
          <div class="detail">
            <h2>Lorem, ipsum dolor.</h2>
            <i class="fas fa-clock"></i>
            <span>2018/6/13</span>
            <span>12:42</span>
            <h5> <i class="fas fa-male"></i>belle wills</h5>   
          </div>
          <div class="noUse"></div>
          <div class="total">
            <h6>total</h6>
            <h3>3200</h3>
          </div>
        </li>
        <li>
          <div class="img_box">
            <img src="https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          </div>
          <div class="detail">
            <h2>Lorem, ipsum dolor.</h2>
            <i class="fas fa-clock"></i>
            <span>2018/6/13</span>
            <span>12:42</span>
            <h5> <i class="fas fa-male"></i>belle wills</h5>   
          </div>
          <div class="noUse"></div>
          <div class="total">
            <h6>total</h6>
            <h3>3200</h3>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </main>
</div>
</template>

<script>
import LineChart from '@/components/common/chart'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

export default {
    name: 'mainPage',
    extends: Line,
    components:{
        LineChart
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    
}
</script>

<style scoped lang="scss">

</style>
