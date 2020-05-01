import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import Home from "./components/Home/Home";
import Roles from "./components/Roles/Roles";
import Map from "./components/Map/Map";
import Video from "./components/Video/Video";
import Info from "./components/Info/Info";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      // Put your routes in here
      { path: "/", component: Home },
      { path: "/Roles", component: Roles },
      { path: "/Map", component: Map },
      { path: "/Video", component: Video },
      { path: "/Info", component: Info }
    ]
  })
}).$mount("#app");
