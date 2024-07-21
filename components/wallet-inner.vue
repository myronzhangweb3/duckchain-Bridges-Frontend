<template>
  <div>
    <CommonButton
        v-if="!slotDefault && !walletStore.account" @click="modal.open()" class="ml-8"
      >
        {{ $t('wallet.connect') }}</CommonButton
    >
    <div v-if="slotDefault && !walletStore.account" @click="modal.open()">
      <slot></slot>
    </div>
    <button v-if="walletStore.account" class=" border border-primary-900  text-primary-900  rounded-full px-4 py-1.5 flex items-center justify-center">
      {{ formatAddress(walletStore.account, 6) }}
      <img src="@/assets/img/share/exit.svg" @click="dis" class="opacity-80 hover:opacity-100 w-6 ml-2 hvr-grow">
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useWeb3Modal, useDisconnect } from '@web3modal/ethers5/vue'
import { useWalletStore } from '@/stores'
import { formatAddress } from '@/libs/utils'
const slotDefault = ref(!!useSlots().default)

const modal = useWeb3Modal()
const { disconnect } = useDisconnect()

const walletStore = useWalletStore()

const dis = async() => {
  await disconnect()
}
</script>