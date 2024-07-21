<template>
  <div>
    <div
      class="flex items-center justify-between w-full opacity-85 hover:opacity-100 cursor-pointer"
    >
      <div v-if="rollupBridgeStore.layer1.name" class="flex items-center">
        <div class="relative">
          <img :src="rollupBridgeStore.layer1.img" class="w-5 h-5 rounded-full" />
        </div>
        <span class="ml-2 flex items-center">
          {{ rollupBridgeStore.layer1.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRollupBridgeStore } from '~~/stores'
const rollupBridgeStore = useRollupBridgeStore()

const props = withDefaults(
  defineProps<{
    reverse: boolean
  }>(),
  {
    reverse: false
  }
)
</script>
