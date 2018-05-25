<template>
  <div>
    Configuración
  </div>
</template>
<script>
import authMixin from '@/lib/auth/mixin';
export default {
  mixins: [authMixin],
  mounted() {
    console.log('mounted');
  }
}
</script>