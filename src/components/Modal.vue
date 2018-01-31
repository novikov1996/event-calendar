<template lang="jade">
  transition(name="modal")
    .modal-mask
      .modal-wrapper
        div(:class="needleStyle")
          .modal-container
            .modal-header
              .container-fluid
                .row
                  .col-xs-8.col-md-11
                    slot( name="header") default header
                  .col-xs-4.col-md-1
                    a.btn.btn-simple.btn-xs.btn-icon.remove.pull-right(@click="$emit('close')")
                      i.glyphicon.glyphicon-remove
            .modal-body.clearfix
              slot( name="body") default body
            .modal-footer
              slot( name="footer") default footer
                button.modal-default-button( @click="$emit('close')") OK
</template>
<script>

  export default {
    name: 'modal',
    props: {
      size: {
        type: String
      }
    },
    data () {
      return {
        styles: {
          small: 'el-col-xs-22 el-col-xs-offset-1 col-sm-6 col-sm-offset-3',
          normal: 'el-col-xs-22 el-col-xs-offset-1 col-sm-offset-2 col-sm-8',
          full: 'full-screen'
        }
      }
    },
    computed: {
      needleStyle: function () {
        switch (this.size) {
          case 'small':
            return this.styles.small
          case 'full':
            return this.styles.full
          default:
            return this.styles.normal
        }
      }
    }
  }

</script>

<style lang="scss">
  @import "../assets/variables.scss";

  .modal-header {
    border: 0 none;
    padding: 20px 0;
    background-color: $white-background-color;
    border-radius: $border-radius-extreme $border-radius-extreme 0 0;
    border-bottom: 1px solid $light-gray;
  }

  .modal-footer {
    border: 0 none;
    padding: 10px 30px !important;
    background-color: $white-background-color;
    border-radius: 0 0 $border-radius-extreme $border-radius-extreme;
    border-top: 1px solid $light-gray;
  }

  .modal-content {
    border: 0 none;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15), 0 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .modal-dialog {
    padding-top: 60px;
  }

  .modal-footer .modal-footer .btn-default.btn-simple {
    font-weight: 400;
  }

  .modal.fade .modal-dialog {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
  }

  .modal.in .modal-dialog {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
  }

  .modal-small {
    .modal-dialog {
      max-width: 350px;
    }
  }

  .modal-small {
    .divider {
      margin: 0 auto;
      display: block;
      width: 14px;
      position: relative;
      margin-top: 40px;
      margin-bottom: 30px;
      font-size: $font-paragraph;
    }
    .divider:after {
      position: absolute;
      content: "";
      right: -140px;
      top: 12px;
      height: 1px;
      width: 115px;
      background-color: $light-gray;
    }
    .divider:before {
      position: absolute;
      content: "";
      left: -140px;
      top: 12px;
      height: 1px;
      width: 115px;
      background-color: $light-gray;
    }
    .modal-footer {
      text-align: center;
    }
  }

  .social-area {
    text-align: center;

    .btn-social {
      margin: 0 10px;
    }
  }

  .modal-backdrop.in {
    opacity: 0.25;
  }

  .modal-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity 1s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    /*padding: 20px 0;*/
    background-color: $white-background-color;
    //border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    z-index: 10;
    /*font-family: Helvetica, Arial, sans-serif;*/
    border-radius: $border-radius-extreme !important;
  }

  .modal-header h4 {
    margin: 0;
  }

  .modal-body {
    margin: 10px 0;
  }

  .alert {
    margin: 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .full-screen > div {
    height: 98vh;
    width: 95vw;
    margin: 0 3vw 0 2vw;
  }
</style>
