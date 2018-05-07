<template>
  <v-app :id="moduleId">
    <v-navigation-drawer fixed app v-model="drawer">
      <v-list dense>
        <navigationList
          v-for="item in navigationItems"
          :children="item.children"
          :icon="item.icon"
          :title="item.title"
          :path="item.path"
          :key="item.id"
          :depth="0" />
      </v-list>
    </v-navigation-drawer>
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
import navigationList from '../components/atoms/navigationList';

export default {
  mixins: [navigationMixin],

  data: () => ({
    drawer: null
  }),

  props: {
    moduleId: String,
    moduleTitle: String,
    source: String
  },

  components: {
    navigationList
  }
}
</script>