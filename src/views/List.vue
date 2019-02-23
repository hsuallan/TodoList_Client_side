<template>
  <div>
    <Todolist />
    <router-view />
  </div>
</template>

<script>
import  Todolist from '@/components/Todolist.vue'

export default {
  name: 'List',
  components: {
   Todolist
  }
}
</script>

<style>

</style>

