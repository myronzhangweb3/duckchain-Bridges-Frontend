<template>
  <div>
    <CommonButton
        v-if="!slotDefault && !tonWalletStore.account" @click="connectWallet" class="ml-8"
      >
        {{ $t('wallet.connectton') }}</CommonButton
    >
    <div v-if="slotDefault && !tonWalletStore.account" @click="connectWallet">
      <slot></slot>
    </div>
    <button v-if="tonWalletStore.account" class=" border border-primary-900  text-primary-900  rounded-full px-4 py-1.5 flex items-center justify-center">
      {{ formatAddress(tonWalletStore.account, 6) }}
      <img src="@/assets/img/share/exit.svg" @click="dis" class="opacity-80 hover:opacity-100 w-6 ml-2 hvr-grow">
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useTonWalletStore } from '@/stores'
import { formatAddress } from '@/libs/utils'
const slotDefault = ref(!!useSlots().default)

const tonWalletStore = useTonWalletStore()

const connectWallet = () => {
  tonWalletStore.connectWallet()
}

const dis = async() => {
  tonWalletStore.disconnectWallet()
}
</script>