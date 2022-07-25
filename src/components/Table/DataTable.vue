<template>
  <div class="container table-responsive py-5">
    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th v-for="(column, i) in cols" :key="i">
            <div>
              <span>{{ column.label }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isEmpty">
         {{isEmpty}}
          <td class="empty-table-cell">
            Nothing Here........
          </td>
        </tr>
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="(column, j) in cols" :key="j">
            <!-- <component
              v-if="column.component"
              :is="column.component"
               :row="row"
              :column="column"
            /> -->
            <!-- {{row[column]}} -->
            <span>{{ row[column.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./DataTable.js"></script>
<style src="./DataTable.css"></style>
