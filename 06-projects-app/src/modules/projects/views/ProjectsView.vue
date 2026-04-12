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
        <tr
          v-for="(project, index) in projectsStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td>
            <span @dblclick="console.log('dbclick')">{{ project.name }}</span>
          </td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-primary w-56"
              :value="project.completion"
              max="100"
            ></progress>
          </td>
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
  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Titulo del modal</h1>
    </template>

    <template #body>
      <p>
        Nulla consequat non ullamco mollit est quis duis pariatur cupidatat consequat Lorem cillum.
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <fav-botton @click="modalOpen = true">
    <add-circle />
  </fav-botton>
  <fav-botton @click="customModalOpen = true" position="bottom-left">
    <modal-icon />
  </fav-botton>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FavBotton from '@/modules/common/components/FavBotton.vue';
import AddCircle from '@/modules/common/icons/addCircle.vue';
import InputModal from '@/modules/common/components/inputModal.vue';
import ModalIcon from '@/modules/common/icons/modalIcon.vue';
import CustomModal from '@/modules/common/components/customModal.vue';
import { useProjectsStore } from '@/stores/projects';

const projectsStore = useProjectsStore();
const modalOpen = ref(false);
const customModalOpen = ref(false);

const onNewValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
