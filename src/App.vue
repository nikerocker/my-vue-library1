<template>
  <div id="app">
    <banner-component position="top">Demo Library</banner-component>
    <data-table :rows="rows" :cols="cols"></data-table>
  </div>
</template>

<script>
import BannerComponent from "./components/BannerComponent.vue";
import DataTable from "./components/Table/DataTable.vue";

export default {
  name: "App",
  components: {
    BannerComponent,
    DataTable,
  },
  data() {
    return {
      // cols: [
      //   { key: "id", label: "ID" },
      //   {
      //     key: "name",
      //     label: "Name",
      //   },
      //   { key: "email", label: "Email" },
      //   { key: "gender", label: "Gender" },
      //   {
      //     key: "birth_date",
      //     label: "Birth Date",
      //   },
      //   { key: "address", label: "Address" },
      // ],
      // rows: [
      //   {
      //     id: "1010",
      //     name: "Darsie Tellett",
      //     email: "dtellett1@behance.net",
      //     gender: "Male",
      //     birth_date: "1990-07-12",
      //     address: "United States",
          
      //   },
      //   {
      //     id: "37742e75-6839-461a-8727-d00b4333176a",
      //     name: "Hilarius Jeaffreson",
      //     email: "hjeaffreson2@ted.com",
      //     gender: "Male",
      //     birth_date: "1993-06-13",
      //     address: "North Port"
      //   },
      //   {
      //     id: "a6ebf9ee-3cc5-4384-b73c-594a79207774",
      //     name: "Lyman Haxley",
      //     email: "lhaxley3@newyorker.com",
      //     gender: null,
      //     birth_date: "1972-12-29",
      //     address: "Houston"
      //   },
      //   {
      //     id: "77b39998-188a-4967-a960-12372308345c",
      //     name: "Lock Kearney",
      //     email: "lkearney4@ucsd.edu",
      //     gender: "Male",
      //     birth_date: "1983-01-17",
      //     address: "Columbus"
      //   },
      //   {
      //     id: "df88b137-fc34-4bd4-b32a-595f79867906",
      //     name: "Ame Blachford",
      //     email: "ablachford5@miitbeian.gov.cn",
      //     gender: "Female",
      //     birth_date: "1974-03-04",
      //     address: "Hovde"
      //   },
      //   {
      //     id: "d18a89e9-a707-4bed-9b75-73a1e712714b",
      //     name: "Bobbye Seldon",
      //     email: "bseldon6@artisteer.com",
      //     gender: "Male",
      //     birth_date: "1993-07-23",
      //     address: "Idaho"
      //   },
      // ]
    };
  },
  methods: {
    getTime(date) {
      return new Date(date).getTime();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
