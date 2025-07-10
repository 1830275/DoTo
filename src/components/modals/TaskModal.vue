<template>
  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-[2px] flex justify-center items-center"
    @click="$emit('close')"
  >
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="true"
        class="bg-white p-6 rounded shadow-lg w-full max-w-md"
        @click.stop
      >
        <h2 class="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block mb-1 font-semibold">Nombre</label>
            <input
              v-model="name"
              type="text"
              required
              class="w-full border rounded px-3 py-2"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-1 font-semibold">Descripción</label>
            <textarea
              v-model="description"
              required
              class="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              @click="$emit('close')"
              class="px-4 py-2 border rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-[#FFD6BA] rounded hover:bg-[#FFB07C]"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../../services/api.js";

const emit = defineEmits(["close", "task-added"]);

const name = ref("");
const description = ref("");

async function submitForm() {
  try {
    await api.post("/task", {
      name: name.value,
      description: description.value,
    });
    emit("task-added"); // para que el padre recargue la lista
    emit("close"); // para cerrar el modal
  } catch (error) {
    console.error("Error al agregar tarea:", error);
  }
}
</script>
