<template lang="jade">
  modal(@close="$emit('close')")
    h4(slot="header") Event
    div(slot="body")
      section.container-fluid.text-left
        .row
          .col-xs-12
            .col-xs-12
              label Title
              el-input(v-model="event.title", type="text")
        .row
          .col-xs-12
            label.col-xs-12 Start
            .col-xs-12.col-sm-6
              el-date-picker(v-model="date_start", type="date", @change="validateDateStart")
            .col-xs-12.col-sm-6
              el-time-select(v-model="time_start", @change="validateDateStart",
              :picker-options="{start: '08:00', step: '00:10',end: '17:00'}")
        .row
          .col-xs-12
            label.col-xs-12 End
            .col-xs-12.col-sm-6
              el-date-picker(v-model="date_end", type="date", @change="validateDateEnd")
            .col-xs-12.col-sm-6
              el-time-select(v-model="time_end", @change="validateDateEnd",
              :picker-options="{start: '08:00', step: '00:10',end: '17:00'}")
    div(slot="footer")
      a.btn.btn-primary.btn-fill.pull-left( @click = "$emit('save')") Save
      a.btn.btn-primary.btn-fill.pull-left( @click = "$emit('close')") Cancel
</template>
<script>
  import Modal from '../Modal.vue'
  import { DatePicker, Input, Upload, InputNumber, TimePicker, TimeSelect } from 'element-ui'
  import _ from 'lodash'
  import moment from 'moment'

  export default {
    components: {
      Modal,
      [Input.name]: Input,
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [TimePicker.name]: TimePicker,
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
    computed: {
      date_start: {
        get: function () {
          return typeof this.event.start === 'string' ? new Date(this.event.start) : this.event.start
        },
        set: function (newValue) {
          this.event.start = this.setDate(newValue, this.time_start)
        }
      },
      date_end: {
        get: function () {
          return typeof this.event.end === 'string' ? new Date(this.event.end) : this.event.end
        },
        set: function (newValue) {
          this.event.end = this.setDate(newValue, this.time_end)
        }
      },
      time_start: {
        get: function () {
          return typeof this.event.start === 'string' ? moment(this.event.start).format('HH:mm') : moment(this.event.start).format('HH:mm')
        },
        set: function (newValue) {
          this.event.start = this.setDate(this.date_start, newValue)
        }
      },
      time_end: {
        get: function () {
          return typeof this.event.end === 'string' ? moment(this.event.end).format('HH:mm') : moment(this.event.end).format('HH:mm')
        },
        set: function (newValue) {
          this.event.end = this.setDate(this.date_end, newValue)
        }
      }
    },
    methods: {
      setDate: function (dateTypeAt, timeTypeAt) {
        var current = moment(dateTypeAt).set({'hours': 0, 'minutes': 0, 'seconds': 0})
        var type = current.add(moment(timeTypeAt, 'HH:mm').get('hours'), 'hours').add(moment(timeTypeAt, 'HH:mm').get('minutes'), 'minutes')
        return type.toDate()
      },
      transformDates: function () {
        this.event.start = typeof this.event.start === 'string' ? new Date(this.event.start) : this.event.start
        this.event.end = typeof this.event.end === 'string' ? new Date(this.event.end) : this.event.end
      },
      validateDateStart: function () {
        console.log(this.event)
        this.transformDates()
        if (!this.event.end) {
          this.event.end = new Date(this.event.start.getTime() + 1800000)
        }
        console.log((this.event.start.getTime() + 10) >= this.event.end.getTime())
        if ((this.event.start.getTime() + 10) >= this.event.end.getTime()) {
          this.event.end = new Date(this.event.start.getTime() + 1800000)
          console.log(this.event.end)
        }
      },
      validateDateEnd: function () {
        this.transformDates()
        if (!this.event.start) {
          this.event.start = new Date(this.event.end.getTime() - 1800000)
        }
        if ((this.event.start.getTime() + 10) >= this.event.end.getTime()) {
          this.event.start = new Date(this.event.end.getTime() - 1800000)
        }
      },
      checkEventEnd () {
        let end = moment(this.event.end)
        if (end.get('hours') === 17 && end.get('minutes') === 30) {
          this.event.end = end.set({'hours': 16, 'minutes': 59})
        }
      }
    },
    created () {
      this.checkEventEnd()
    }
  }
</script>
<style lang="scss">
  .row {
    padding-bottom: 15px;
  }

  .el-input, .el-input-number, .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
    &__inner {
      width: 100%;
    }
  }

</style>
