<script>
  import axios from 'axios'
  import moment from 'moment'
  import _ from 'lodash'

  let jsonpAdapter = require('axios-jsonp')

  const connection = axios.create(
    {
      baseUrl: 'localhost:4000',
      adapter: jsonpAdapter
    }
  )

  export default {
    getUserEvents: function (userId, that) {
      axios.get('/user/events/' + userId).then((response) => {
        that.events = response.data
      })
    },
    getUser: function (id, callback, error) {
      axios.get(url + '/user/' + id).then(function (response) {
        callback(response.data)
      }).catch(function (e) {
        error(e)
      })
    },
    registerUser: function (user, callback, error) {
      connection.post('/register', {data: user}).then(function (response) {
        callback(response)
      }).catch(function (e) {
        error(e)
      })
    }
  }
</script>
