<template>
  <button
    @click="$emit('click')"
    :class="['btn', 'btn-circle', 'btn-secondary', 'fixed', position]"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
});
defineEmits(['click']);
</script>
<style scoped>
.top-left {
  top: 2.5rem;
  left: 2.5rem;
}
.top-right {
  top: 2.5rem;
  right: 2.5rem;
}
.bottom-left {
  bottom: 2.5rem;
  left: 2.5rem;
}
.bottom-right {
  bottom: 2.5rem;
  right: 2.5rem;
}
</style>
