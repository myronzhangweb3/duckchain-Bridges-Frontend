<template>
    <div class="rounded-xl mb-2 w-full lg:w-110">
        <div class="bg-[#ffffff22] p-4 rounded-xl">
            <div class="flex items-center justify-between">
                <div class="flex items-center text-sm" :class="item.direction == 1 ? 'flex-row-reverse' : ''">
                    <div class="flex items-center">
                        <img :src="LAYER1.img" class="w-5" alt="">
                        <div class="ml-2">{{ LAYER1.name }}</div>
                    </div>
                    <div class="mx-2">-></div>
                    <div class="flex items-center">
                        <img :src="ROLLUP.img" class="w-6 rounded-full" alt="">
                        <div class="ml-2">{{ ROLLUP.name }}</div>
                    </div>
                </div>
                <div class="flex text-xs font-bold items-center">
                    {{ item.amount }}
                    <Token :symbol="symbol" :address="item.tokenAddress" class="ml-2 w-5 h-5" />
                </div>
            </div>
            <div class="mt-4 flex items-center justify-between font-bold">
                <div class="text-xs">
                    <div v-if="item.sourceChainTxHash">Layer1 Tx: <a :href="LAYER1.explorerUrl+'/transaction/'+item.sourceChainTxHash" target="_blank" class="ml-2 text-primary-900 underline cursor-pointer hover:opacity-90">{{ formatAddress(item.sourceChainTxHash, 6) }}</a></div>
                    <div v-if="item.targetChainTxHash">Layer2 Tx: <a :href="ROLLUP.explorerUrl+'/tx/'+item.targetChainTxHash" target="_blank" class="ml-2 text-primary-900 underline cursor-pointer hover:opacity-90">{{ formatAddress(item.targetChainTxHash, 6) }}</a></div>
                    <div class="mt-2 text-[#777]">{{ moment(item.timestamp * 1000).format("YYYY-MM-DD HH:mm:ss")  }}</div>
                </div>
                <div :class="item.status == 3 ? 'text-primary-900' : item.status == 4 ? 'text-red-900' : 'text-[#ff8400]'">
                    {{ item.status == 3 ? 'Success' : item.status == 4 ? 'Error' : 'Pending' }}
                </div>
            </div>
            <div class="text-red-900 text-xs text-right">{{ item.errorMsg}}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { LAYER1, ROLLUP, TOKENS } from '~~/constants/rollup-bridge/networks'
import { formatAddress } from '@/libs/utils'
import moment from 'moment';
const status = ref(-1)
const loading = ref(false)


const props = withDefaults(
    defineProps<{
        item: any
    }>(),
    {
        item: () => {
            return {}
        }
    }
)

const symbol = computed(() => {
    const item = TOKENS.find(item => (item.rollupAddress.toLowerCase() === props.item.tokenAddress.toLowerCase()) || (item.layer1Address.toLowerCase() === props.item.tokenAddress.toLowerCase()))
    if (item) {
        return item.symbol
    }
    return '-'
})
</script>
