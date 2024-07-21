<template>
  <div
    class="flex items-center rounded-md cursor-pointer mr-3 hover:(text-primary-900 lg:text-lg)"
    @click="navigate"
  >
    <span class="ml-2 mt-4 flex h-8 items-center">
      <span class="mr-1.5">{{ name }}</span>
      <slot></slot>
    </span>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const props = withDefaults(
  defineProps<{
    url?: string
    local?: boolean
    name?: string
  }>(),
  {
    url: '',
    local: false,
    name: ''
  }
)

const navigate = () => {
  if (props.local) {
    router.push(props.url)
  } else {
    window.open(props.url)
  }
}
</script>
