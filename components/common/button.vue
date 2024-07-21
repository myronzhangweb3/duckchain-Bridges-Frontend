<template>
  <button
    class="flex items-center justify-center py-2 px-4 rounded-full"
    @click="ifDisabled"
    :class="style"
  >
    <img v-if="loading" src="@/assets/img/button/button-loading.svg" class="w-4 img-rotate mr-2">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    loading: false,
    disabled: false
  }
)

const ifDisabled = (e: any) => {
  if (props.disabled || props.loading) {
    e.stopImmediatePropagation()
  }
}

const style = computed(() => {
  let css = ''
  if (props.disabled) {
    css += 'bg-[#777]'
  } else {
    css += 'bg-primary-900 text-black cursor-pointer opacity-90 hover:opacity-100'
  }

  if (props.disabled || props.loading) {
    css += ' cursor-not-allowed'
  } 

  if (props.disabled) {
    css += ' text-[#aaa]'
  } else {
    css += ' text-white'
  }
 
  return css
})
</script>
