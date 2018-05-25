<template>
  <v-list-tile v-if="!children && hasPermissionToRoute(routeId)"
    @click="(!children) ? go(path) : ''">
    <template v-if="depth == 0">
      <v-list-tile-action>
        <v-icon>{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </template>
    <template v-else>
      <v-list-tile-title v-text="title"></v-list-tile-title>
      <v-list-tile-action>
        <v-icon v-text="icon"></v-icon>
      </v-list-tile-action>
    </template>
  </v-list-tile>
  <v-list-group v-else-if="hasPermissionToRoute(routeId)"
    :prepend-icon="(depth != 1) ? icon : ''"
    :no-action="(depth >= 2) ? '' : 'no-action'"
    :sub-group="depth == 1">
    <v-list-tile :slot="(depth >= 2) ? '' : 'activator'">
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </v-list-tile>
    <navigationList
      v-for="item in children"
      :children="item.children"
      :icon="item.icon"
      :title="item.title"
      :key="item.id"
      :routeId="item.id"
      :path="item.path"
      :depth="depth + 1" />
  </v-list-group>
</template>
<script>
import authMixin from '@/lib/auth/mixin';

export default {
  mixins: [authMixin],
  name: "navigationList",
  props: {
    children: Object,
    routeId: String,
    title: String,
    icon: String,
    path: String,
    depth: Number
  },
  methods: {
    go (path) {
      this.$router.push(path);
    }
  }
}
</script>
