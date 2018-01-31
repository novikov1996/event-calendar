<template lang="jade">
  div.container
    full-calendar(:config="config", :events="events", @event-created="eventCreated")
    a#download.btn.btn-primary(:href="'data:' + eventsData", download="events.json") Save JSON
    event-modal(v-if="showEventModal", :event="event", @save="saveEvent", @close="handleClose")
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'
  import EventModal from './Modals/EventModal.vue'
  import 'fullcalendar/dist/fullcalendar.min.css'
  import moment from 'moment'
  import _ from 'lodash'

  export default {
    components: {
      FullCalendar,
      [EventModal.name]: EventModal
    },
    name: 'calendar',
    data () {
      return {
        test: [],
        event: {},
        showEventModal: false,
        events: [
          {
            title: 'test',
            start: moment().set('hour', 13).set('minute', 20),
            end: moment().set('hour', 15).set('minute', 20)
          },
          {
            title: 'another test',
            start: moment().set('hour', 9).set('minute', 20),
            end: moment().set('hour', 11).set('minute', 33)
          }
        ],
        config: {
          defaultView: 'agendaDay',
          allDaySlot: false,
          displayEventTime: false,
          slotLabelFormat: 'h:mm',
          slotLabelInterval: '00:30:00',
          slotEventOverlap: false,
          height: 485,
          minTime: '08:00:00',
          maxTime: '17:00:01',
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek,agendaDay'
          },
          eventRender: function (event, element) {
            console.log(event)
          }
        }
      }
    },
    created () {
    },
    computed: {
      eventsData: function () {
        let that = this
        let eventsForJSON = []
        let events = _.cloneDeep(this.events)
        _.forEach(events, function (event) {
          let objectDefault = {
            start: null,
            duration: null,
            title: ''
          }
          objectDefault.start = that.getMinutes(event.start)
          objectDefault.duration = that.getMinutes(event.end) - objectDefault.start
          objectDefault.title = event.title
          eventsForJSON.push(objectDefault)
          objectDefault = null
        })
        this.test = eventsForJSON
        return 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(eventsForJSON))
      }
    },
    methods: {
      getMinutes (date) {
        return moment(date).get('minutes') + (moment(date).subtract(8, 'h').get('hours') * 60)
      },
      eventCreated (event) {
        this.showEventModal = true
        this.event = {
          title: event.title,
          start: event.start,
          end: event.end
        }
      },
      saveEvent () {
        this.showEventModal = false
        this.events.push(this.event)
        /*ApiConnector.storeTask(this.task, function (data) { console.log('Saved', data) }, function (e) { console.log(e) })*/
      },
      handleClose () {
        this.showEventModal = false
      }
    }
  }
</script>

<style lang="scss">
  .fc-event, .fc-event:hover {
    text-overflow: ellipsis;
    max-width: 200px;
    background-color: #E2ECF5;
    border-radius: 0;
    border-left: 1px solid #6E9ECF;
    border-right: none;
    border-top: none;
    border-bottom: none;
  }

  .fc-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px;
    text-overflow: ellipsis;
  }

  .fc-slats {
    table tbody {
      tr[data-time] {
        font-family: 'Open Sans', sans-serif;
        &:nth-child(odd) {
          font-size: 16px;
        }
        &:nth-child(even) {
          font-size: 12px;
        }
      }
    }
  }

  #download {
    margin-top: 50px;
  }
</style>
