<template lang="jade">
  div.container
    pre {{user1}}
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

  import ApiConnector from '../services/ApiConnector'
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
        },
        user1: {}
      }
    },
    methods: {
      register () {
        let that = this
        let test = {
          'login': 'ddd2d',
          'password': 'ssss'
        }
        ApiConnector.registerUser(test, function (data) {
          that.user1 = data
        })
      }
    }
  }
</script>
<style></style>
