<template>
  <div>
    Index
    {{ count }}
    <button class="button" @click="increment">Click</button>
  </div>
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment');
    }
  }
}
</script>

