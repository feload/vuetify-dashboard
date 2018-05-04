<template>
  <v-app :id="moduleId">
    <navigationDrawer :show="drawer" :items="navigationItems" />
    <v-toolbar color="indigo" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ moduleTitle }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex shrink>
            <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import navigationMixin from '../mixins/navigation';
import navigationDrawer from '../components/molecules/navigationDrawer';

export default {
  mixins: [navigationMixin],

  data: () => ({
    drawer: true
  }),

  props: {
    moduleId: String,
    moduleTitle: String,
    source: String
  },

  components: {
    navigationDrawer
  }
}
</script>