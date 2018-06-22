<template>
<div>
  <div class="mask" @click="closefn"></div>
  <div id="add-pop">
    <div class="title">
      <h1>ADD NEW PRODUCT</h1>
      <i class="fas fa-times" @click="closefn"></i>
    </div>
    <div class="add-img">
      <div class="upload">
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Drag an image or click here to upload</p>
      </div>
      <div class="picture">
        <img src="https://fakeimg.pl/50x50/?retina=1&text=こんにちは&font=noto">
        <img src="https://fakeimg.pl/50x50/?retina=1&text=こんにちは&font=noto">
        <img src="https://fakeimg.pl/50x50/?retina=1&text=こんにちは&font=noto">
        <img src="https://fakeimg.pl/50x50/?retina=1&text=こんにちは&font=noto">
        <img src="https://fakeimg.pl/50x50/?retina=1&text=こんにちは&font=noto">
<!--         <div class="noUse"></div> -->
      </div>
    </div>
    <div class="edit">
      <h3>Product Discription</h3>
      <input type="text" class="disc">
      <textarea name="" id="" cols="70" rows="10">
        
      </textarea>
      <h3>Price</h3>
      <div class="original-box">
        <input type="text" id="original">
      </div>
      <div class="discount-box">
          <input type="text" id="discount">
      </div>
      <h3>Specification</h3>
      <div class="size-box">
        <input type="text" id="size">
      </div>
      <div class="color-box">
          <input type="text" id="color">
      </div>
      <div class="inventory-box">
          <input type="text" id="inventory">
      </div>
      <div class="add-new">
        ADD NEW SPECIFICATION
      </div>
      <button class="temp"></button>
      <button class="save"></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'mainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // showAdd:false
    }
  },
    methods:{
      openFn(){
        // this.showAdd = true;
        this.$emit('openFn');
      },
      closefn(){
        // this.showAdd = false;
        this.$emit('closefn')
      }
  }
}
</script>

<style scoped lang="scss">

</style>
