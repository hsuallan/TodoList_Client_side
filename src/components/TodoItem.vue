<template>
  <div class="item">
    <h1> {{ item.Topic }} </h1>
    <p>{{ item.Content }}</p>
    <p>{{ item.Date }}</p>
    <p>{{ item.finish }}</p>
  </div>
</template>

<script>
import axios from "axios"
import cfg from "../config.js"
export default {
  name: 'TodoItem',
  props: {
    id:{
      type:String,
      default:function(){return ''}
    }
  },
  data(){
    return{
      item:{
        type:Object,
        default:''
      }
    }
  },
  watch:{
    id:function(){
      this.getdata()
    },
  },
  created:function(){
    this.getdata()
    },
  methods:{
    getdata(){
      axios.get(`${cfg.apiAddress}/list/${this.id}`)//this.props
        .then(response=>{
          return JSON.parse(response.data)
        })
        .then((data)=>{
          if(data.err){
            alert(data.err)
          }
          this.item = data
        })
        .catch(err=>{
          alert(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  background-color:lightslategrey;
}
</style>
