<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <client-only>
      <WalletOuter />
    </client-only>
    <div id="ton-connector" class="hidden"></div>
  </div>
</template>
<script setup lang="ts">
import { Buffer } from 'buffer'
import { useTonWalletStore } from '@/stores'
const tonWalletStore = useTonWalletStore()

if (window?.Buffer) {
  window.Buffer = Buffer
}

onMounted(() => {
  tonWalletStore.init()
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>