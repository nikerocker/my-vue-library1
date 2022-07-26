import Vue from "vue";
import BannerComponent from "./BannerComponent.vue";
import DataTable from "./Table/DataTable.vue";

const Components = {
  BannerComponent,
  DataTable
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
