<template>
  <basicLayout
    :id="id"
    :title="title">
    <router-view></router-view>
  </basicLayout>
</template>
<script>
import basicLayout from '@/layouts/basic.vue';
import metadata from '../meta';

export default {
  data () {
    return {
      ...metadata
    };
  },

  components: {
    basicLayout
  }
}
</script>