<template>
  <div class="h-full">
    <CommonHeader />
    <div class="h-20"></div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useWalletStore, useRollupBridgeStore } from '~~/stores'

const rollupBridgeStore = useRollupBridgeStore()
const walletStore = useWalletStore()

watch(
  () => [walletStore.account, rollupBridgeStore.rollupList],
  () => {
    if (walletStore.account) {
      rollupBridgeStore.initActivities(walletStore.account)
    } else {
      rollupBridgeStore.stopActivities()
    }
  }
)
</script>