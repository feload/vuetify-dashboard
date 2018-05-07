<template>
  <basicLayout layoutType="all-center">
    <h1 class="display-1">
      <v-icon x-large disabled class="mb-3">help</v-icon>
      <p>Documento no encontrado.</p>
    </h1>
    <p>Le sugerimos verificar que la ruta de acceso sea la correcta o bien intentando más tarde. <br>Para cualquier duda, favor de comunicarse a la extensión <b>4044</b>.</p>
  </basicLayout>
</template>
<script>
import basicLayout from '../../layouts/basic.vue';
export default {
  components: {
    basicLayout
  }
}
</script>

