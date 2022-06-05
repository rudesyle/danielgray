// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMobilePhone,faMobileRetro, faDashboard,faWrench } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { router, head, isClient }) {
  /* add icons to the library */
  library.add(faDashboard,faWrench,faMobilePhone,faMobileRetro)
  // Set default layout as a global component
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}