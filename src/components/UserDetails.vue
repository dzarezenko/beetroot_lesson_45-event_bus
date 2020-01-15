<template>
  <div id="user_details">
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
      //default: "Some Name",
    },
  },
  methods: {
    changeName() {
      //this.userName = "Elon";
      //this.$emit("nameChanged", "Elon");
      //this.callback("Elon");

      eventBus.$emit("nameChanged", "Elon");
    },
  },
}
</script>

<style scoped>
#user_details {
  width: 49%;
  height: 300px;
  background-color:cornflowerblue;
  border: 1px solid #000;
  display: block;
}
</style>
