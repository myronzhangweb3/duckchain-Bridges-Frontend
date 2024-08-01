<!-- <template>
    <div class="flex justify-end">
        <div id="ton-connect-ui"></div>
        <div id="ton-connect-ui-button"></div>
        <div @click="sendTransaction">Transaction</div>
    </div>
</template>

<script setup>
import { Buffer } from 'buffer'
if (window?.Buffer) {
  window.Buffer = Buffer
}
import { THEME, TonConnectUI } from '@tonconnect/ui'

const tonConnect = ref(null)

onMounted(async () => {
    tonConnect.value = markRaw(new TonConnectUI({
      manifestUrl: 'https://bridge.ton.org/tonconnect-manifest.json',
      buttonRootId: 'ton-connect-ui-button'
    }));

    tonConnect.value.uiOptions = {
      uiPreferences: {
        theme: THEME.DARK
      }
    };
})


const sendTransaction = async() => {
    const { beginCell, toNano } = await import('@ton/ton')
    const { Address } = await import('@ton/core')

    
    // ton token
    const body = beginCell()
    .storeUint(0, 32)
    .storeStringTail('swapTo#0x909a7c6527c3e2f3F75aD282DA6a1dd67fc50a10')
    .endCell();
    const transaction = {
        messages: [
            {
                address: "EQApi2TaBLKseMi9ifC45cGG-zexU4_d4Y8KSnikZRq23f_I",
                amount: "1000000",
                payload: body.toBoc().toString("base64")
            }
        ]
    }


    // const body = beginCell()
    //     .storeUint(0xf8a7ea5, 32)
    //     .storeUint(0, 64)
    //     .storeCoins('1000000000000000000')
    //     .storeAddress(Address.parse('EQApi2TaBLKseMi9ifC45cGG-zexU4_d4Y8KSnikZRq23f_I'))
    //     .storeAddress(Address.parse('0QDpD1KT535x-0qQHbqC0pWrrpjyPicFOyO4tAOAOxNIo-p4'))
    //     .storeUint(0, 1)
    //     .storeCoins(toNano(0.05))
    //     .storeUint(0, 1)
    //     .storeUint(0, 32)
    //     .storeStringTail('swapTo#0x909a7c6527c3e2f3F75aD282DA6a1dd67fc50a10')
    //     .endCell();

    // const transaction = {
    //     messages: [
    //         {
    //             address: "0:B42C9BD814ACA110687A26EFC51CC137F95FAA7E89F45171C967F9097A4505D7",
    //             amount: "100000000",
    //             payload: body.toBoc().toString("base64")
    //         }
    //     ]
    // }

    await tonConnect.value.sendTransaction(transaction);
}

</script>

<style scoped>

</style> -->
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