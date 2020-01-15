<template>
  <div id="user_edit">
    <h3>User Name: {{ userName }}</h3>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import { eventBus } from  "../main";

export default {
  props: {
    userName: {
      type: [ String, Number ],
      required: true,
    },
  },
  methods: {
    changeName() {
      eventBus.$emit("nameChanged", "Pamela");
    },
  },
}
</script>

<style scoped>
#user_edit {
  width: 49%;
  height: 300px;
  background-color:darksalmon;
  border: 1px solid #000;
  display: block;
}
</style>
