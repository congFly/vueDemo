<template>
  <div class="child">
    <p>子组件</p>
    <ul class="list-inline">
      <li><a class="btn btn-primary" @click="changeColor1">&nbsp;</a></li>
      <li><a class="btn btn-info" @click="changeColor2">&nbsp;</a></li>
      <li><a class="btn btn-danger" @click="changeColor3">&nbsp;</a></li>
      <li><a class="btn btn-warning" @click="changeColor4">&nbsp;</a></li>
      <li><a class="btn btn-default" @click="changeColor5">&nbsp;</a></li>
    </ul>
    <input class="input" @keyup.enter="tellToParent" v-model="childSaySomething">
    <br>
    <br>
    <button @click="getParent">getParentMsg</button>
    <p>xixi:{{parentMessage}}</p>
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
    props: ['parentMsg', 'parentMessage'],
    data(){
      return {
        childSaySomething: '',
        childColor1: '#337ab7',
        childColor2: '#5bc0de',
        childColor3: '#d9534f',
        childColor4: '#f0ad4e',
        childColor5: '#ddd',
      }
    },
    methods: {
      changeColor1: function () {
        this.$emit('change', this.childColor1);
      },
      changeColor2: function () {
        this.$emit('change', this.childColor2);
      },
      changeColor3: function () {
        this.$emit('change', this.childColor3);
      },
      changeColor4: function () {
        this.$emit('change', this.childColor4);
      },
      changeColor5: function () {
        this.$emit('change', this.childColor5);
      },
      getParent: function () {
        console.log(this.parentMsg)
      },
      tellToParent: function () {
        this.$emit('listenChild', this.childSaySomething);
      }
    }
  }
</script>
