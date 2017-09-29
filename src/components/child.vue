<template>
  <div class="child">
    <ul class="list-inline">
      <li><a href="#" class="btn btn-primary" @click="changeColor">&nbsp;</a></li>
      <li><a href=" #" class="btn btn-info" @click="changeColor">&nbsp;</a></li>
      <li><a href="#" class="btn btn-danger" @click="changeColor">&nbsp;</a></li>
      <li><a href="#" class="btn btn-warning" @click="changeColor">&nbsp;</a></li>
      <li><a href="#" class="btn btn-default" @click="changeColor">&nbsp;</a></li>
    </ul>
    <button @click="getParent">getParentMsg</button>
  </div>
</template>
<style>
  .child {
    float: left;
    margin-right: 40px;
    border-color: black;
    border: 1px solid;
    height: 200px;
    width: 400px;
  }
</style>
<script>
  export default{
    /*props: ['activeColor', 'activeColor1','parentMsg'],*/
    props: ['parentMsg'],
    data(){
      return {
        childColor: 'yellow',
      }
    },
    methods: {
      changeColor: function () {
        console.log(this.childColor);
        this.$emit('change', this.childColor);
      },
      getParent: function () {
        console.log(this.parentMsg)
      }
    }
  }
</script>
