<template>
  <div class="add">
    <form> 
      <input
        v-model="Topic"
        name="Topic"
        placeholder="Topic"
        required
      ><br>
      <input
        v-model="Content"
        name="Content"
        placeholder="Content"
        required
      ><br>
      <input
        v-model="Dodate"
        name="date"
        placeholder="date"
      ><br>
      <input
        v-model="finish"
        type="radio"
        name="finish"
        value="true"
      >finish
      <input
        v-model="finish"
        type="radio"
        name="finish"
        value="false"
      >unfinish<br>
      <button @click="postdata()">
        submit
      </button>
      <input type="reset">
    </form>
    <p>{{ `${Topic}=>${Content}=>${Dodate}=>${finish}` }}</p>
  </div>
</template>

<script>
import axios from "axios"
import cfg from "../config.js"
export default {
  name:'Additem',
  data(){
    return{
       Topic:'',
       Content:'',
       Dodate:'',
       finish:'',
    }
  },
  methods:{
    postdata(){
      axios.post(`${cfg.apiAddress}/list`,{
        Topic:this.Topic,
        Content:this.Content,
        Dodate:this.Dodate,
        finish:this.finish
      })
      .then((response)=>{
        alert(response.data)
      })
      .catch((err)=>{
        alert(err)
      })
    }
  }
}
</script>

<style>

</style>

