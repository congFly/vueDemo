<template>
  <div class="col-xs-10 col-xs-offset-1 parent" :style="{background:parentColor}">
    <br/>
  <!--  <p v-model="parentMsg">{{parentMsg}}</p>-->
    <input v-model="parentMsg">
    <ul class="list-inline">
      <li>对应第一个child</li>
      <li @click="changeChild1Color"><a href="#" class="btn btn-primary">&nbsp;</a>
      </li>
      <li @click="changeChild1Color"><a href="#" class="btn btn-info">&nbsp;</a></li>
      <li @click="changeChild1Color"><a href="#" class="btn btn-danger">&nbsp;</a></li>
      <li @click="changeChild1Color"><a href="#" class="btn btn-warning">&nbsp;</a></li>
      <li @click="changeChild1Color"><a href="#" class="btn btn-default">&nbsp;</a></li>
    </ul>
    <ul class="list-inline">
      <li @click="changeChild2Color">对应第二个child</li>
      <li @click="changeChild2Color"><a href="#" class="btn btn-primary">&nbsp;</a></li>
      <li @click="changeChild2Color"><a href="#" class="btn btn-info">&nbsp;</a></li>
      <li @click="changeChild2Color"><a href="#" class="btn btn-danger">&nbsp;</a></li>
      <li @click="changeChild2Color"><a href="#" class="btn btn-warning">&nbsp;</a></li>
      <li @click="changeChild2Color"><a href="#" class="btn btn-default">&nbsp;</a></li>
    </ul>
    <hr/>
    <child class="child1" :style="{background:activeColor}" v-on:change="changeParentColor" :parentMsg="parentMsg"></child>
    <child class="child2" :style="{background:activeColor1}" v-on:change="changeParentColor"></child>
  </div>
</template>
<style>
  .parent {
    height: 400px;
    border: 3px solid;
  }
</style>
<script>
  import child from './child';

  export default{
    data(){
      return {
        parentMsg: 'i am  parent',
        activeColor: '',
        activeColor1: '',
        parentColor: '',
      }
    },
    methods: {
      changeChild1Color(){
        this.activeColor = 'green';
      },
      changeChild2Color(){
        this.activeColor1 = 'grey'
      },
      changeParentColor(childColor){
        this.parentColor = childColor;
      }
    },
    components: {
      child
    }
  }

</script>
