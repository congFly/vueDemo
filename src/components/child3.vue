<template>
  <div class="child3">
    <div :seller="seller">
      1312
      <h1 class="name">{{seller}}</h1>
    </div>
  </div>
</template>
<script>
  export default({
    props: {
      seller: {type: Object}
    }
  })
</script>
<style>
  .child3 {
    border-color: black;
    border: 3px solid;
    height: 200px;
    width: 400px;
  }
</style>
