<template>
  <basicLayout>
    <router-view></router-view>
  </basicLayout>
</template>
<script>
import basicLayout from '@/layouts/basic.vue';
export default {
  components: {
    basicLayout
  }
}
</script>