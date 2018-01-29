<template lang="jade">
  modal(@close="$emit('close')")
    h4(slot="header") Event
    div(slot="body")
      section.container.text-center
        .row
          .col-xs-12
            label Title
            el-input(v-model="event.title", type="text")
        .row
          .col-xs-12.col-sm-6
            label Start
            el-date-picker(v-model="event.start", type="date")
        .row
          .col-xs-12.col-sm-6
            label End
            el-date-picker(v-model="event.end", type="date")
      div(slot="footer")
        a.btn.btn-default.btn-fill.pull-left( @click = "$emit('save')") Save
        a.btn.btn-default.btn-fill.pull-left( @click = "$emit('close')") Cancel
</template>

<script>
  import Modal from '../Modal.vue'
  import { DatePicker, Input, Upload, InputNumber } from 'element-ui'
  import _ from 'lodash'

  export default {
    components: {
      Modal,
      [Input.name]: Input,
      [DatePicker.name]: DatePicker,
      [InputNumber.name]: InputNumber
    },
    name: 'event-modal',
    props: {
      'event': {
        type: Object
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
