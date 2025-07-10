<template>
  <div class="max-w-3xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold mb-4 text-[#FFD6BA]">Lista de Tareas</h1>
      <button
        @click="showModal = true"
        class="mb-4 px-4 py-2 bg-[#ffeddf] rounded-full hover:bg-[#ffe7d6] flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>

    <div v-if="loading" class="text-gray-500">Cargando tareas...</div>
    <ul v-else>
      <li
        v-for="task in tasks"
        :key="task.id"
        class="mb-2 p-3 bg-[#FFF2EB] flex rounded-md shadow-sm"
      >
        <div class="flex-1 text-left  break-words min-w-0">
          <h2 class="font-semibold">{{ task.name }}</h2>
          <p class="text-sm text-gray-600">{{ task.description }}</p>
        </div>

        <button @click="editTask(task)">✏️ Editar</button>

      </li>
    </ul>

    <div v-if="tasks.length === 0 && !loading" class="text-gray-500">
      No hay tareas aún.
    </div>
    <TaskModal v-if="showModal" @close="showModal = false" @task-added="fetchTasks" />

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskModal from "../components/modals/TaskModal.vue";
import api from "../services/api.js";

const tasks = ref([]);
const loading = ref(true);
const showModal = ref(false);

const fetchTasks = async () => {
  loading.value = true;
  try {
    const res = await api.get("/task");
    tasks.value = res.data;
  } catch (error) {
    console.error("Error al obtener tareas:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchTasks);
</script>
