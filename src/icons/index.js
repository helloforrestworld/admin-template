import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// https://juejin.im/post/59bb864b5188257e7a427c09
Vue.component('svg-icon', SvgIcon)

const r = require.context('./svg', false, /\.svg$/)

importAll(r)

function importAll (r) {
  r.keys().forEach(r)
}
