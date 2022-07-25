import Vue from "vue";
import BannerComponent from "./BannerComponent.vue";

const Components = {
  BannerComponent,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
