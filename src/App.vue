<template>
  <main>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
