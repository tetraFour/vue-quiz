<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar">
      <div class="progress-bar__completed" :style="{ width: getSize }"></div>
    </div>
    <div class="counter">{{ completed }}/{{ questionCount }}</div>
  </div>
</template>
<script>
const ratio = 14.3;

export default {
  props: {
    completed: { type: Number },
    questionCount: { type: Number, default: 7 }
  },

  computed: {
    getSize() {
      return `${100 - (100 - this.completed * ratio)}%`;
    }
  }
};
</script>
