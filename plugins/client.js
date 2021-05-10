import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'
import LocomotiveScroll from './locomotive'

Vue.directive('in-viewport', inViewportDirective)

Vue.use(LocomotiveScroll)

