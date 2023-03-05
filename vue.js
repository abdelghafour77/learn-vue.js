const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      title: "hello world",
      show: true,
      age: 12,
      users: [
        { name: "jack", age: 12 },
        { name: "tom", age: 13 },
        { name: "jerry", age: 14 }
      ]
    }
  },
  methods: {
    changeTitle() {
      this.title = "hello vue"
    },
    showToggles() {
      this.show = !this.show
    }

  }
})
app.mount("#app")