<template>
  <section class="title-wrapper title-wrapper__lose">
    <div class="image-container">
      <img :src="sadPic" alt="" />
    </div>
    <h1 class="title-heading">
      Вы проиграли!
    </h1>
    <span class="title-tip">Попробуйте еще раз!</span>
    <router-link to="/questions/question-1" class="btn btn__cross">
      <img src="../../public/images/replay.svg" alt="" />
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sadPic: `${process.env.BASE_URL}images/sad.svg`
    };
  }
};
</script>
