<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <!-- row 2 -->
        <tr class="hover:bg-base-300">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>
  <fav-botton>
    <add-circle />
  </fav-botton>
</template>
<script setup lang="ts">
import FavBotton from '@/modules/common/components/FavBotton.vue';
import AddCircle from '@/modules/common/icons/addCircle.vue';
</script>
