<template>
  <div id="main_container">
    <user-details />
    <user-edit />
  </div>
</template>

<script>
import UserDetails from "@/components/UserDetails"
import UserEdit from "@/components/UserEdit"

export default {
  components: {
    "user-details": UserDetails,
    "user-edit": UserEdit,
  }
}
</script>

<style scoped>
#main_container {
  width: 96%;
  height: 300px;
  background-color: aquamarine;
  border: 1px solid #000;
  display: block;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>