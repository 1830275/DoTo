<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Home</h1>
    <p v-if="isAuthenticated">Bienvenido, {{ user.name }}</p>
    <button @click="login" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Iniciar sesión</button>
  </div>

</template>

<script setup>
import { useMainStore } from '../store'
import axios from 'axios'

const store = useMainStore()

const login = () => {
  store.login({ name: 'Javier' })
}


axios.get('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res.data))


const { user, isAuthenticated } = store
</script>
