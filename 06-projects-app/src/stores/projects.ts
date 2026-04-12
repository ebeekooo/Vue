import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    { id: 1, name: 'Proyecto 1', taskCount: 10, completion: 50 },
    { id: 2, name: 'Proyecto 2', taskCount: 5, completion: 80 },
  ]);

  const projectsWithCompletion = computed(() => projects.value);

  return {
    projects,
    projectsWithCompletion,
  };
});</content>
<parameter name="filePath">c:\Users\edisb\git\Vue\06-projects-app\src\stores\projects.ts
