<template>
  <basicLayout>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <h1 class="display-1">
            <v-icon x-large disabled class="mb-3">lock</v-icon>
            <p>Acceso restringido</p>
          </h1>
          <p>
            Es probable que usted no cuente con los permisos requeridos para realizar esta actividad.<br>
            Si piensa que esto se debe a un error, por favor, comuníquese a la extensión <b>4044</b>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
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

