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
  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="onNewValue"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    sub-title="Dale un nombre único a tu proyecto"
  />

  <fav-botton @click="modalOpen = true">
    <add-circle />
  </fav-botton>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FavBotton from '@/modules/common/components/FavBotton.vue';
import AddCircle from '@/modules/common/icons/addCircle.vue';
import InputModal from '@/modules/common/components/inputModal.vue';

const modalOpen = ref(false);
//const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
