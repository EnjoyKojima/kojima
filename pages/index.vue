<script setup lang="ts">
const { data } = await useFetch('/api/kv');
</script>

<template>
  <div>
    <div class="mb-4">
      <NuxtLink to="/add" class="bg-blue-500 text-white px-4 py-2 rounded-md">
        書き込む
      </NuxtLink>
    </div>
    <ul v-if="data?.messages" class="p-4 bg-gray-100 rounded-md">
      <li v-for="message in data.messages" :key="message.key">
        <div class="text-xs text-gray-500">
          {{ message.key }}
        </div>
        <div class="text-base text-gray-800">
          {{ message.value }}
        </div>
      </li>
    </ul>
    <div v-else class="p-4 bg-gray-100 rounded-md">
      <p class="text-gray-500">
        まだメッセージがありません
      </p>
    </div>
  </div>
</template>
