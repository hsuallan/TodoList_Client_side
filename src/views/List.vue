<template>
  <div>
    <Additem />
    <Todolist />
    <router-view />
  </div>
</template>

<script>
import  Todolist from '@/components/Todolist.vue'
import Additem from '@/components/Additem.vue'
export default {
  name: 'List',
  components: {
   Todolist,
   Additem
  }
}
</script>

<style>

</style>

