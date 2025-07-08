<template>
  <div class="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4 text-[#FFD6BA]">Lista de Tareas</h1>

    <div v-if="loading" class="text-gray-500">Cargando tareas...</div>
    <ul v-else>
      <li v-for="task in tasks" :key="task.id" class="mb-2 p-3 bg-[#FFF2EB] rounded-md shadow-sm">
        <h2 class="font-semibold">{{ task.name }}</h2>
        <p class="text-sm text-gray-600">{{ task.description }}</p>
      </li>
    </ul>

    <div v-if="tasks.length === 0 && !loading" class="text-gray-500">No hay tareas aún.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api.js'

const tasks = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await api.get('/task')
    tasks.value = res.data
  } catch (error) {
    console.error('Error al obtener tareas:', error)
  } finally {
    loading.value = false
  }
})
</script>