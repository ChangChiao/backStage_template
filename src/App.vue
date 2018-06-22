<template>
  <div>
    <header>
        <div class="logo">
          ShopTime
        </div>
        <ul>
          <router-link to="/">HOME</router-link>
          <router-link to="/orderList">ORDERS</router-link>
          <router-link to="/orderDetail">PRODUCT</router-link>
        </ul>
        <div class="noUse"></div>
        <span>ADMIN</span>
      </header>

      <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>

</template>


<script>

export default {
  name: 'App',
  data (){
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~@/scss/main';
</style>
