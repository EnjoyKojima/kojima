<script setup lang="ts">
const message = ref('')
const router = useRouter()

async function handleSubmit() {
  await $fetch('/api/kv', {
    method: 'POST',
    body: {
      message: message.value
    }
  })
  
  router.push('/')
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input 
        v-model="message"
        type="text" 
        name="message" 
        placeholder="メッセージ"
        class="border rounded px-2 py-1 mr-2" 
      />
      <button 
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        送信
      </button>
    </form>
  </div>
</template>
