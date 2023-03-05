const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      title: "hello world",
      show: true,
      age: 12,
      users: [
        { name: "jack", age: 12, isFav: true },
        { name: "tom", age: 13, isFav: false },
        { name: "jerry", age: 14, isFav: true }
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
  },
  computed: {
    filterUsers() {
      return this.users.filter(user => user.age > 12)
    }
  }
})
app.mount("#app")