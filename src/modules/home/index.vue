<template>
  <basicLayout
    :id="id"
    :title="title">
    <v-container page>
      <v-layout row wrap>
        <v-flex lg12 xs12>
          <h1 class="display-1">Bienvenido.</h1><br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis tenetur nobis, ipsam laudantium blanditiis amet aliquam? Laboriosam incidunt sit repudiandae ab. Ab dolorum quidem doloremque tempore rem dolore, cum molestias adipisci.   </p>
        </v-flex>
      </v-layout>
    </v-container>
  </basicLayout>
</template>
<script>
import basicLayout from '../../layouts/basic.vue';
import metadata from './meta';

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
