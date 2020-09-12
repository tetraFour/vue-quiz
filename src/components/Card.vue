<template>
  <div class="card">
    <slot></slot>
    <router-link :to="route" class="card__bth-text-content">
      {{ textContent }}
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    textContent: {
      type: String,
      default: "12.5 триллионов"
    },
    id: {
      type: Number
    },

    route: {
      type: String
    }
  }
};
</script>
