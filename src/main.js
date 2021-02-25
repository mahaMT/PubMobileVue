import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible';

Vue.config.productionTip = false
import './assets/css/reset.css'

// 引入api
import * as api from "./util/api"
Vue.prototype.api = api;

// 引入公共方法
import utils from "./util/utils"
Vue.prototype.utils = utils;

// 按需引入vant
import {   
  Button,
  Search,
  Dialog,
  List,
  Field,
  Icon,
  Checkbox, CheckboxGroup,
  Picker,
  IndexBar, IndexAnchor,
  Tab, Tabs,
  Popup,
  Toast,
  RadioGroup, Radio,
  Cell, CellGroup,
  Rate,
  Uploader,
  DropdownMenu, DropdownItem,
  Swipe, SwipeItem,
} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(DropdownMenu).use(DropdownItem).use(Uploader).use(Cell).use(CellGroup).use(Rate).use(RadioGroup).use(Radio).use(Toast).use(Field).use(List).use(Button).use(Dialog).use(Search).use(Checkbox).use(CheckboxGroup).use(Icon).use(Picker).use(IndexBar).use(IndexAnchor).use(Tab).use(Tabs).use(Popup)


// 根据路由设置标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

