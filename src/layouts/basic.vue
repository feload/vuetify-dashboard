<template>
  <v-app :id="moduleId">
    <v-navigation-drawer fixed app v-model="drawer">
      <div class="logo">
        <img class="logo__image ml-2 mt-1" src="public/ug-horz.png" alt="Universidad de Guanajuato">
      </div>
      <v-list class="pt-0" dense>
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
    <v-toolbar color="indigo darken-2" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ moduleTitle }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <slot></slot>
    </v-content>
    <v-footer color="indigo darken-2 pl-2" app>
      <span class="white--text">Universidad de Guanajuato &copy; 2017</span>
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