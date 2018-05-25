<template>
  <basicLayout>
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex lg12 xs12>
          <v-card>
            <v-card-text class="px-0">
              Inicio<br>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
