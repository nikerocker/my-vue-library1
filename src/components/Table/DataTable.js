export default {
  name: "DataTableTable",
  props: {
    rows: Array,
    cols: Array,
  },
  data() {
    return {
      //   rows: this.rows,
      //   columns: this.columns,
    };
  },
  computed: { 
    numberOfColumns(){
      return this.rows.length
    },
    isEmpty() {
        return this.numberOfColumns.length === 0?true:false
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      console.log("both", this.rows, this.cols,'isEmpty',this.isEmpty,'numberOfColumns',this.numberOfColumns);
    },
  },
};
