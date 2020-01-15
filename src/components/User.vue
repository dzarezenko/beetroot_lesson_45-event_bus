<template>
  <div id="main_container">
    <h3 style="width: 100%">
      Name: {{ eventBus.name }}
      <br />
      <button @click="eventBus.changeName('Steve')">Change Name</button>
    </h3>
    <user-details :userName="eventBus.name" />
    <user-edit :userName="eventBus.name" />
  </div>
</template>

<script>
import { eventBus } from  "../main";

import UserDetails from "@/components/UserDetails"
import UserEdit from "@/components/UserEdit"

export default {
  data() {
    return {
      eventBus
    }
  },
  components: {
    "user-details": UserDetails,
    "user-edit": UserEdit,
  },
}
</script>

<style scoped>
#main_container {
  width: 96%;
  background-color: aquamarine;
  border: 1px solid #000;
  display: block;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>