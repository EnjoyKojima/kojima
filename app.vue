<script setup lang="ts">
const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <div>
    <div>
      カウンター: {{ count }}
    </div>
    <div>
      <button @click="increment">増やす</button>
      <button @click="decrement">減らす</button>
    </div>
  </div>
</template>
