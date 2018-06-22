<template>
   <div class="wrapper-product">
    <div class="add" @click="openAdd">
      ADD NEW PRODUCT
      <i class="fas fa-plus"></i>
     </div>  
     <table border="0" cellspacing="0" cellpadding="0">
       <tr>
         <th>Product</th>
         <th>Original</th>
         <th>Discount</th>
         <th>Size</th>
         <th>Color</th>
         <th>Inventory</th>
         <th>Status</th>
       </tr>
        <tr v-for="(vo, index) in orderDetail.orders">
          <td>
            <input type="checkbox">
            <img :src="vo.img" alt="">
            <span class="name">{{vo.product}}</span>
          </td>
          <td>
            <p class="price">${{vo.price}}</p>
          </td>
          <td>
            ${{vo.discount.toFixed(2)}}
          </td>
          <td>
            <div class="item-info">
              <span>{{vo.size}}</span>
            </div>
<!--             <div class="item-info">
              <span>M</span>
              <span>blue</span>
              <span>10</span>
            </div>
            <div class="item-info">
              <span>S</span>
              <span>red</span>
              <span>2</span>
            </div> -->
          </td>
          <td>
              {{vo.color}}
          </td>
          <td>
            <span>{{vo.inventory}}</span>
          </td>
          <td>
            <div :class="['stauts', vo.status]">
              {{vo.status}}
              <i class="fas fa-sort-down"></i>
            </div>
          </td>
        </tr>
    </table>
    <compAdd @closefn="closeAdd" v-if="showAdd"></compAdd>
  </div>
</template>

<script>
import fakeDetail from '@/json/orderDetail'
import compAdd from '@/components/common/add'
export default {
    name: 'orderDetail',
    data () {
        return {
            orderDetail:fakeDetail,
            showAdd:false,
        }
    },
    components:{
        compAdd
    },
    methods:{
        openAdd(){
            this.showAdd = !this.showAdd;
        },
        closeAdd(){
            this.showAdd = !this.showAdd;
        }
    }
}
</script>

<style scoped lang="scss">

</style>
