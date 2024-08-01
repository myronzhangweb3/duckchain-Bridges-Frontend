<template>
  <div class="h-full">
    <CommonHeader />
    <div class="h-20"></div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useWalletStore, useRollupBridgeStore, useTonWalletStore } from '~~/stores'

const rollupBridgeStore = useRollupBridgeStore()
const walletStore = useWalletStore()
const tonWalletStore = useTonWalletStore()

// watch(
//   () => [walletStore.account, rollupBridgeStore.rollupList],
//   () => {
//     if (walletStore.account) {
//       rollupBridgeStore.initActivities(walletStore.account)
//     } else {
//       rollupBridgeStore.stopActivities()
//     }
//   }
// )

watch(
  () => [tonWalletStore.account, rollupBridgeStore.rollupList],
  () => {
    if (tonWalletStore.account) {
      rollupBridgeStore.initActivities(tonWalletStore.account)
    } else {
      rollupBridgeStore.stopActivities()
    }
  }
)
</script>