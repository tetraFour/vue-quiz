<template>
  <section class="title-wrapper">
    <span class="title-tip">Выбери правильный вариант</span>
    <div class="title-heading">
      {{ title }}
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: { type: String }
  }
};
</script>
