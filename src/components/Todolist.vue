<template>
  <div>
    <div v-if="loading">
      Loading... please wait
    </div>
    <div v-else>
      <p
        v-for="item in items"
        :key="item.id"
        class="card"
        @click="detail(item.id)"
      >
        {{ `${item.Topic} :  ${item.id}` }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import cfg from "../config.js"
export default {
  name:'Todolist',
  components:{

  },
  data(){
    return{
      items:{
        default:'',
        type:Object
      },
      loading:true,
    }
  },
  created:function(){
    axios.get(`${cfg.apiAddress}/list`)
      .then((response)=>{
        this.items = JSON.parse(response.data)
      })
      .catch(err=>{
        alert(err)
      })
      .finally(()=>{
        this.loading = false
      })
  },
  methods:{
    detail(id){
      this.$router.push({path:`/list/${id}`})
    }
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 10px;
  background:aqua;
}

</style>
