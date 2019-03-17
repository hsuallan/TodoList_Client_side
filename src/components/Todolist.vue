<template>
  <div>
    <div
      v-if="loading"
      class="loading"
    >
      <Spin fix>
        <Icon
          type="ios-loading"
          size="18"
          class="demo-spin-icon-load"
        />
        <div>Loading...</div>
      </Spin>
    </div>
    <div v-else>
      <Collapse
        v-model="openid"
        accordion
      >
        <Panel
          v-for="item in items"
          :key="item.id"
          :name="item.id"
          class="ptitle"
        >
          {{ item.Topic }}
          <p slot="content">
            {{ `${item.Topic} :  ${item.id}` }}
          </p>
        </Panel>
      </Collapse>
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
      openid:'',
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
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
.loading{
  height: 100px;
  position: relative;
}
.ptitle{
  text-align: left;
}
</style>
