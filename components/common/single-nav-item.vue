<template>
  <div>
    <div class="hidden lg:block">
      <div
        class="mr-10 items-center hover:text-primary-900 cursor-pointer hvr-bounce-in hvr-underline-from-center py-4"
        @click="goToLink"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="lg:hidden">
      <div
        class="mr-10 items-center hover:text-primary-900 cursor-pointer py-4"
        @click="goToLink"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const props = withDefaults(
  defineProps<{
    item?: any
  }>(),
  {
    item: () => {
      return {
        link: '',
        name: '',
        img: ''
      }
    }
  }
)

const goToLink = () => {
  if (props.item.link.startsWith('/')) {
    router.push(props.item.link)
  } else {
    window.open(props.item.link)
  }
}
</script>
