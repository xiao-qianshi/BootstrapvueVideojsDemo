<template>
  <b-container>
    <b-container class="signin">
      <h2>用户登录</h2>
      <b-row>
        <b-col sm="4" offset="4">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="用户名:"
              label-for="input-1"
              description=""
              required
              align="left"
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                required
                placeholder="请输入用户名"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="密 码:" align="left" label-for="input-2">
              <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="请输入密码"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">登录</b-button>
            <b-button type="reset" variant="danger">重置</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$router.push('/Live')
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.username = ''
      this.form.password = ''
    }
  }
}
</script>
<style scoped>
.signin{
  margin-top: 30vh;
}
</style>
