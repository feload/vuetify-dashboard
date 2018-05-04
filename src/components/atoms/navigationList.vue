<template>
  <v-list>
    <v-list-group
      v-if="children"
          no-action
      :sub-group="depth != 0"
      value="true">
      <navigationList
        v-for="item in children"
        :children="item.children"
        :icon="item.icon"
        :title="item.title"
        :key="item.id"
        :depth="depth + 1"/>
    </v-list-group>
    <v-list-tile v-else>
      <v-list-tile-action>
        <v-icon>{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </v-list-tile>


<!--
<v-list-group prepend-icon="account_circle" value="true">
  <v-list-tile slot="activator">
    <v-list-tile-title>Users</v-list-tile-title>
  </v-list-tile>
  <v-list-group
    sub-group
    no-action
    value="true">
    <v-list-tile slot="activator">
      <v-list-tile-title>Admin</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>b</v-list-tile-title>
      <v-list-tile-action>
        <v-icon></v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list-group>
  <v-list-group
    sub-group
    no-action>
    <v-list-tile slot="activator">
      <v-list-tile-title>Actions</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>a</v-list-tile-title>
      <v-list-tile-action>
        <v-icon></v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list-group>
</v-list-group>
-->


  </v-list>
</template>
<script>
export default {
  props: {
    children: Object,
    title: String,
    icon: String,
    depth: Number
  },
  name: "navigationList"
}
</script>
