import Vue from 'vue'

export default () => {
  Vue.filter('dateYear', function (value) {
    if (!value) { return '' }
    return `${value.substr(0, 4)}`
  })
}
