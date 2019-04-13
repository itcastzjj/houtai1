<template>
  <div class="login">登录</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    myfun () {
      var a = 'adsd45655'
      var b = /^[a-z_][0-9]{1,15}$/
      var c = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
      if (c.test(a)) {
        console.log(1)
      } else {
        console.log(2)
      }
    }
  },
  mounted () {
    this.myfun()
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-color: #f00;
  width: 1rem;
  height: 1rem;
  font-size: 0.18rem;
}
</style>
