<template>
  <div id="main_container">
    <h3 style="width: 100%">
      Name: {{ name }}
      <br />
      <button @click="changeName('Steve')">Change Name</button>
    </h3>
    <user-details :userName="name" @nameChanged="changeName($event)" />
    <user-edit />
  </div>
</template>

<script>
import UserDetails from "@/components/UserDetails"
import UserEdit from "@/components/UserEdit"

export default {
  data() {
    return {
      name: "Bill",
    }
  },
  components: {
    "user-details": UserDetails,
    "user-edit": UserEdit,
  },
  methods: {
    changeName(_name) {
      this.name = _name;
    }
  }
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