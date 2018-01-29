<template lang="jade">
  div.container
    .col-xs-12
      label login
      el-input(type="text", v-model="user.email")
    .col-xs-12
      label password
      el-input(type="text", v-model="user.password")
    .col-xs-12
      label confirmPassword
    el-input(type="text", v-model="user.confirmPassword")
    .col-xs-12.text-center
      button.btn.btn-primary(@click="register") Sign Up
</template>
<script>

  /*import ApiConnector from 'src/services/ApiConnector'*/
  import { Input } from 'element-ui'

  export default {
    components: {
      [Input.name]: Input
    },
    data () {
      return {
       user: {
          email: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      register () {
        console.log(this.user)
        /*var _this = this
        ApiConnector.Register(this.user, function (data) {
          if (data.data.success && data.status === 201) {
            _this.successfullyRegistered = true
          }
        })*/
      }
    }
  }
</script>
<style></style>
