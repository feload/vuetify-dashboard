<template>
  <v-app :id="id">
    <template v-if="authIsReady">
      <v-navigation-drawer fixed app v-model="drawer">
        <div class="logo">
          <img class="logo__image ml-3 mt-2" src="public/ug-horz.png" alt="Universidad de Guanajuato">
        </div>
        <v-list class="pt-0" dense>
          <navigationList
            v-for="item in navigationItems"
            :children="item.children"
            :icon="item.icon"
            :title="item.title"
            :path="item.path"
            :routeId="item.id"
            :key="item.id"
            :depth="0" />
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo darken-2" dark app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-menu bottom left>
            <v-btn slot="activator" icon dark>
              <v-avatar size="36px">
                <img :src="`http://siidrh.ugto.mx/ws/APIPerfilBasico/Foto/${profile.sub}/md`">
              </v-avatar>
            </v-btn>
            <v-list>
              <v-list-tile @click="authSignOut">
                <v-list-tile-title>Cerrar sesión</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar>
      <v-content>
        <slot></slot>
      </v-content>
      <v-footer color="indigo darken-2 pl-2" app>
        <span class="white--text">Universidad de Guanajuato &copy; 2017</span>
      </v-footer>
    </template>
    <template v-else>
      <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex text-xs-center>
          <v-progress-circular :size="45" indeterminate color="primary"></v-progress-circular>
        </v-flex>
      </v-layout>
      </v-container>
    </template>
  </v-app>
</template>

<script>
import navigationMixin from '@/lib/navigation/mixin.js';
import authMixin from '@/lib/auth/mixin.js';
import navigationList from '../components/atoms/navigationList';

export default {
  mixins: [authMixin, navigationMixin],

  data: () => ({
    drawer: null
  }),

  props: {
    id: String,
    title: String,
    source: String
  },

  components: {
    navigationList
  }

}
</script>