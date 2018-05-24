<template>
  <basicLayout>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex lg12 xs12>
          <v-card>
            <v-card-text class="px-0">
              Inicio<br>
              <pre>{{ access_token }}</pre>
              <v-btn color="success" @click="iniciarSesion">
                Iniciar sesión
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </basicLayout>
</template>
<script>
import basicLayout from '../../layouts/basic.vue';
import { signIn } from '@/lib/auth';

export default {
  methods: {
    iniciarSesion () {
      signIn();
    }
  },
  computed: {
    access_token () {
      const access_token = this.$store.getters['auth/get'].access_token;
      return (access_token) ? access_token.substr(-4) : "";
    }
  },
  components: {
    basicLayout
  }
}
</script>
