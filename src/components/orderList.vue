<template>
    <div class="wrapper-orders">
    <div class="orders-container">
      <div class="select-info">
          <i class="fas fa-check-square"></i>
          <i class="fas fa-sort-down"></i>
          <i class="fas fa-tags"></i>
          <div class="noUse"></div>
          <span>EDIT SECTION</span>
          <i class="fas fa-sort-down"></i>
      </div>
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <th>Customer</th>
          <th>Product List</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Add to Cart</th>
          <th>Check-out</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
        <tr v-for="(vo, index) in orderList.orders">
          <td>
            <input type="checkbox">
            <span class="name">{{vo.name.substr(0, 6)}}</span>
          </td>
          <td>
            <span class="buy-item">{{vo.product}}</span>
            <p class="price">${{vo.price}}</p>
          </td>
          <td>
            {{vo.number}}
          </td>
          <td>
            ${{vo.price*vo.number}}
          </td>
          <td>
            <span class="buy-time">{{vo.datePast.substr(0, 9)}}</span>
          </td>
          <td>
            <span class="buy-time">{{vo.dateFuture.substr(0, 9)}}</span>
          </td>
          <td>
            {{vo.address}}
          </td>
          <td>
            <div :class="['stauts', vo.status]">
              {{vo.status}}
              <i class="fas fa-sort-down"></i>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import fakeData from '@/json/orderList'
export default {
    name: 'orderList',
    data () {
    return {
        orderList :fakeData,
        }
    }
}
</script>

<style scoped lang="scss">

</style>
