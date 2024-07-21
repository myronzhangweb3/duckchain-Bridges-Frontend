<template>
  <CommonButton large class="w-full text-base" :disabled="!submitStatus.loading && (feesLoading || submitStatus.disabled)" :loading="submitStatus.loading" @click="clickButton">
    {{ submitStatus.word }}
  </CommonButton>
</template>
<script lang="ts" setup>
const vm = getCurrentInstance()?.proxy
const emit = defineEmits(['on-click'])
const props = withDefaults(
  defineProps<{
    submit?: number
    balance?: string
    amount?: string
    feesLoading?: boolean
    fees: number
    reverse?: boolean
  }>(),
  {
    submit: 0,
    balance: '0',
    amount: '0',
    feesLoading: true,
    fees: 0,
    reverse: false
  }
)

const submitStatus = computed(() => {
  let disabled = true
  let word = ''
  let loading = false
  if (props.submit === 0) {
    if (Number(props.balance) === 0) {
      word = vm?.$t('deposit.balanceEmpty')
    } else if (Number(props.amount) <= 0) {
      word = vm?.$t('deposit.enterAmount')
    } else if (Number(props.amount) > Number(props.balance)) {
      word = vm?.$t('deposit.overAmount')
    } else {
      word = vm?.$t('deposit.confirm')
      disabled = false
    }
  } else if (props.submit === 1) {
    word = vm?.$t('deposit.confirm')
    loading = true
  } else if (props.submit === 2) {
    word = vm?.$t('deposit.approving')
    loading = true
  } else if (props.submit === 3) {
    word = vm?.$t('deposit.continue')
    disabled = false
    loading = false
  } else if (props.submit === 4) {
    word = props.reverse ? vm?.$t('deposit.withdrawing') : vm?.$t('deposit.depositing')
    loading = true
  } else {
    word = vm?.$t('deposit.end')
    loading = true
  }
  return {
    word,
    disabled,
    loading
  }
})

function clickButton() {
  emit('on-click')
}
</script>