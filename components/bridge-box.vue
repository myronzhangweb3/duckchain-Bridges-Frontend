<template>
  <div class="mt-8 lg:mt-32 pb-8 lg:mb-0 mx-8 md:(flex mx-0) items-center justify-center flex-col">
    <slot></slot>
    <div class="cursor-pointer hover:(text-primary-900 underline) mt-4" @click="router.push('/activities')">{{ $t('home.views') }}</div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter()
</script>