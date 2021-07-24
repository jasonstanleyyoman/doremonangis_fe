<template>
  <div class="store">
    <h1 is="sui-header">Nama Toko</h1>
    <sui-button basic negative>Delete Store</sui-button>
    <h2 is="sui-header" dividing>
      Dorayaki
    </h2>
    <sui-table single-line>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>No.</sui-table-header-cell>
          <sui-table-header-cell>Flavor</sui-table-header-cell>
          <sui-table-header-cell>Description</sui-table-header-cell>
          <sui-table-header-cell>Amount</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <table-row></table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
import TableRow from "../components/TableRow.vue";
export default {
  name: "Store",
  components: {
    TableRow
  }
}
</script>

<style scoped>
.store {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
}

.store h2 {
  width: 100%;
}

</style>