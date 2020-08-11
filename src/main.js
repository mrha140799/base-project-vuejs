import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap';
import '@coreui/coreui/dist/js/coreui.bundle';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale';
import viLocale from 'element-ui/lib/locale/lang/vi';

window.toastr = require('toastr');

window.toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '6000',
  extendedTimeOut: '1000'
};
locale.use(viLocale);
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
});

window.Ladda = require('ladda');
window.jQuery = window.$ = require('jquery');
Vue.directive('ladda', function LaddaDirectiveOptions(el, binding, vnode) {
  window.$(el).attr('data-style', 'slide-left');
  window.Ladda.bind(el);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
