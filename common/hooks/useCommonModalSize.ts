export function useCommonModalSize() {
  const pageWidth = ref(0)
  const pageHeight = ref(0)

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      pageWidth.value = document.documentElement.clientWidth
      pageHeight.value = document.documentElement.clientHeight
    })
    nextTick(() => {
      pageWidth.value = document.documentElement.clientWidth
      pageHeight.value = document.documentElement.clientHeight
    })
  }

  const modalWidth = computed(() => {
    if (pageWidth.value > 1024) {
      return '450px'
    } else if (pageWidth.value > 700) {
      return '50%'
    } else {
      return '85%'
    }
  })
  return {
    modalWidth,
    pageWidth,
    pageHeight
  }
}
