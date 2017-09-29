<template>
  <div class="col-xs-10 col-xs-offset-1 parent" :style="{background:parentColor}">
    <br/>
    <!--  <p v-model="parentMsg">{{parentMsg}}</p>-->
    <input v-model="parentMsg">
    <p>I want to hear what you say:</p>
    <p>{{childSaySomething}}</p>
    <ul class="list-inline">
      <li>对应第一个child</li>
      <li @click="changeChild1Color1"><a href="#" class="btn btn-primary">&nbsp;</a>
      </li>
      <li @click="changeChild1Color2"><a href="#" class="btn btn-info">&nbsp;</a></li>
      <li @click="changeChild1Color3"><a href="#" class="btn btn-danger">&nbsp;</a></li>
      <li @click="changeChild1Color4"><a href="#" class="btn btn-warning">&nbsp;</a></li>
      <li @click="changeChild1Color5"><a href="#" class="btn btn-default">&nbsp;</a></li>
    </ul>
    <ul class="list-inline">
      <li>对应第二个child</li>
      <li @click="changeChild2Color1"><a href="#" class="btn btn-primary">&nbsp;</a></li>
      <li @click="changeChild2Color2"><a href="#" class="btn btn-info">&nbsp;</a></li>
      <li @click="changeChild2Color3"><a href="#" class="btn btn-danger">&nbsp;</a></li>
      <li @click="changeChild2Color4"><a href="#" class="btn btn-warning">&nbsp;</a></li>
      <li @click="changeChild2Color5"><a href="#" class="btn btn-default">&nbsp;</a></li>
    </ul>
    <hr/>
    <child class="child1" :style="{background:activeColor}" v-on:change="changeParentColor"
           :parentMsg="parentMsg"></child>
    <child class="child2" :style="{background:activeColor1}" v-on:change="changeParentColor" v-on:listenChild="listen"></child>
    <!--<child class="child3" v-on:listenChild="listen"></child>-->
  </div>
</template>
<style>
  .parent {
    height: 800px;
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
        childSaySomething: ''
      }
    },
    methods: {
      listen(childSaySomething){
        this.childSaySomething = childSaySomething;
      },
      changeChild1Color1(){
        this.activeColor = '#337ab7';
      },
      changeChild1Color2(){
        this.activeColor = '#5bc0de';
      },
      changeChild1Color3(){
        this.activeColor = '#d9534f';
      },
      changeChild1Color4(){
        this.activeColor = '#f0ad4e';
      },
      changeChild1Color5(){
        this.activeColor = '#ddd';
      },


      changeChild2Color1(){
        this.activeColor1 = '#337ab7';
      },
      changeChild2Color2(){
        this.activeColor1 = '#5bc0de';
      },
      changeChild2Color3(){
        this.activeColor1 = '#d9534f';
      },
      changeChild2Color4(){
        this.activeColor1 = '#f0ad4e';
      },
      changeChild2Color5(){
        this.activeColor1 = '#ddd';
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
