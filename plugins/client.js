import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import VueMask from 'v-mask'
import LocomotiveScroll from './locomotive'

Vue.directive('in-viewport', inViewportDirective)

Vue.use(LocomotiveScroll)
Vue.use(VueMask)
Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})
