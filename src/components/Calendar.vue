<template lang="jade">
  div.container
    full-calendar(:config="config", :events="events", @event-created="eventCreated")
    event-modal(v-if="showEventModal", :event="event", @save="saveEvent", @close="closeModal")
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
        event: {},
        showEventModal: false,
        events: [
          {
            title: 'test',
            start: moment().add(1, 'd'),
            end: moment().add(1, 'd').add(3, 'h')
          },
          {
            title: 'another test',
            start: moment().add(2, 'd'),
            end: moment().add(2, 'd').add(2, 'h')
          }
        ],
        eventSources: [
          {
            title: 'test',
            start: moment().add(3, 'd'),
            end: moment().add(3, 'd').add(1, 'h')
          },
          {
            title: 'another test',
            start: moment().add(3, 'd'),
            end: moment().add(3, 'd').add(6, 'h')
          }
        ],
        config: {
         /* locale: 'uk',*/
          defaultView: 'agendaWeek',
          allDaySlot: false,
          slotLabelFormat: 'h:mm',
          slotLabelInterval: '00:30:00',
          slotEventOverlap: false,
          height: 485,
          minTime: '08:00:00',
          maxTime: '17:30:00',
          eventRender: function (event, element) {
            console.log(event)
          }
        }
      }
    },
    created () {
    },
    methods: {
      eventCreated (event) {
        this.showEventModal = true
        this.event = {
          title: event.title,
          start: event.start,
          end: event.end
        }
        console.log(event)
      }
    }
  }
</script>

<style>
  .calendars > div {
    margin-top: 4px;
    background-color: #da6666;
    color: #fff;
    padding: 1px 7px;
    border-radius: 7px;
  }

  .calendars > div:nth-child(2) {
    background-color: #658cda;
  }

  .calendars > div:nth-child(3) {
    background-color: #49b050;
  }

  .calendars > div:nth-child(4) {
    background-color: #e7804c;
  }

  .calendars > div:nth-child(5) {
    background-color: #8c66da;
  }

  .calendars > div:nth-child(6) {
    background-color: #64ad88;
  }

  .calendars > div:nth-child(7) {
    background-color: #84aaa5;
  }

  .calendars > div:nth-child(8) {
    background-color: #e77399;
  }

  .calendars > div:nth-child(9) {
    background-color: #bfbf4b;
  }

  .calendars > div:nth-child(10) {
    background-color: #FFCE73;
  }

  .calendars > div:nth-child(11) {
    background-color: #0026FF;
  }
</style>
