<template>
  <div v-show="showing" class="modal-wrapper" :style="{zIndex: zIndex}">
    <div class="modal-center">
        <slot>
            <span>Modal Centre</span>
        </slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'default',
    data () {
        return {

        }
    },
    props: {
        zIndex: {
            type: Number,
            required: false,
            default: 925
        },
        showing: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        //
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../shared'
.modal-wrapper
    position: fixed
    top: 0
    left: 0
    +flexCentre
    width: 100vw
    height: 100vh

    .modal-center
</style>
