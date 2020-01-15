import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data() {
    return {
      name: "Bill",
    }
  },
  methods: {
    changeName(_name) {
      this.name = _name;
    }
  },
  created() {
    this.$on("nameChanged", (name) => {
      //alert("!!!");
      //console.log(name);
      this.changeName(name);
    });
  },
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
