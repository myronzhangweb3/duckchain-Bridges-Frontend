<template>
  <div class="mr-10">
    <div class="relative hidden lg:block" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <div
        class="py-4 cursor-pointer flex items-center transition hvr-bounce-in hvr-underline-from-center"
        :class="show ? 'text-primary-900' : 'text-white'"
      >
        {{ name }}
        <IconTriangleDownLine
          :class="{ 'rotate-180': show }"
          class="ml-0.5 w-4 flex-shrink-0 transform transition inline"
        />
      </div>
      <transition name="fade-up">
        <div v-show="show" class="absolute z-10">
          <ul
            class="w-40 px-4 pb-4 shadow-default list-none absolute top-2 -left-4 transform rounded-lg bg-[#222222bb]"
            :class="size === 'large' ? 'w-56' : ''"
          >
            <slot></slot>
          </ul>
        </div>
      </transition>
    </div>
    <el-collapse class="lg:hidden">
      <el-collapse-item :title="name" class="py-4">
        <slot></slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: string
    name?: string
    hideStatus?: boolean
  }>(),
  {
    size: 'large',
    name: '',
    hideStatus: false
  }
)
const show = ref(false)
const mouseEnter = () => {
  show.value = true
}
const mouseLeave = () => {
  show.value = false
}
watch(
  () => props.hideStatus,
  () => {
    show.value = false
  },
  { immediate: true }
)
</script>
<style scoped>
.show-box {
  top: 90%;
}
</style>
