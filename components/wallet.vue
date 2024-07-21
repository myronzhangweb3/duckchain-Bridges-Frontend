<template>
  <client-only>
    <WalletInner v-if="slotDefault">
      <slot></slot>
    </WalletInner>
    <WalletInner v-else />
  </client-only>
</template>
<script lang="ts" setup>
const slotDefault = ref(!!useSlots().default)
</script>