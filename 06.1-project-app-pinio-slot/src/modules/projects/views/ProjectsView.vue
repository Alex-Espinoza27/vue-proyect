<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for=" (item, index) in projectsStore.projects" :key="item.id" class="hover:bg-base-300">
          <th>{{ index +1  }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.tasks.length }}</td>
          <td>
            <!-- {{ item.tasks.filter(task => task.completedAt).length }} -->
            <progress class="progress progress-info w-56" value="10" max="100"></progress>
          </td>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>

    <input-modal 
      :open="modalOpen" 
      placeholder="Insert el nombre del proyecto..."
      title="Registro de Proyecto"
      subtitle="Modal para el registro de proyectos"
      @close="modalOpen = false"
      @value="projectsStore.addProjects"
      />

      <!-- Enviar slots en varios fragmentos an componente hijo -->
    <custom-modal :open="customModalOpen" @close="customModalOpen = false">
      <template #header>
         <h3 class="text-lg font-bold">Hello!</h3>
         <p class="py-4">Press ESC key or click the button below to close</p>
      </template>
      
      <template #body>
         <h3 class="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Iusto quisquam nam corporis vel! Dolorem, asperiores. Necessitatibus 
          quibusdam pariatur voluptas dolorum adipisci error !</h3> 
      </template>

      <template #footer>
          <div class="flex justify-end mt-4 mr-4">
            <button type="button" class="btn" @click="customModalOpen = false">Close</button>
            <button type="submit" class="btn btn-primary" @click="customModalOpen = false">Aceptar</button>
          </div>
      </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
      <!-- Todo el contenido es recibido en el slot del componente <fab-button> -->
      <addition />
    </fab-button>

    <fab-button @click="customModalOpen = true" position="bottom-left">
      <!-- Todo el contenido es recibido en el slot del componente <fab-button> -->
      <fly />
    </fab-button>
 
  </div>
</template>

<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import Addition from '@/modules/common/icons/Addition.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { ref } from 'vue';
import Fly from '@/modules/common/icons/Fly.vue';
import { useProjectsStore } from '../store/projects.store';
 

const modalOpen = ref(false);
const customModalOpen = ref(false);

// const onNewValue = (projectName: string) => {
//   console.log('New value from modal:', projectName);
//   projectsStore.projectList.push({
//     id: '6',
//     name: projectName,
//     tasks: [],
//   });

// };


//----------------------------------------------------------
const projectsStore = useProjectsStore();

</script>
 