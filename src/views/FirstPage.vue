<template>
  <div class="container">
    <header>
      <router-link to="/" class="btn btn__cross">
        <img src="../../public/images/cross.svg" alt="" />
      </router-link>
      <quiz-progress-bar :completed="question.id"></quiz-progress-bar>
    </header>
    <quiz-title :title="question.question"></quiz-title>
    <section class="cards-list" v-if="question">
      <quiz-card
        v-for="(question, id) in question.answerList"
        :key="id"
        :route="question.route"
        :text-content="question.textContent"
      >
        <div class="card__image-content" v-if="question.imageContent">
          <img
            :src="`${question.imageContent}`"
            alt=""
            class="card__image-content"
          />
        </div>
      </quiz-card>
    </section>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import Card from "@/components/Card";
import Title from "@/components/Title";

export default {
  name: "App",
  data() {
    return {
      isSelected: false,
      question: {}
    };
  },

  updated() {
    console.log("updated");
  },

  watch: {
    $route: "loadCurrentQuiz"
  },
  mounted() {
    this.loadCurrentQuiz();
  },
  methods: {
    loadCurrentQuiz() {
      const getAllQuestions = this.$store.getters.allQuestions;
      const thisPage = Number(this.$route.path.split("-")[1]);
      const currentQuestion = getAllQuestions.filter(
        question => question.id === thisPage
      );

      this.question = currentQuestion[0];
      console.log("question", this.question);
    }
  },
  components: {
    "quiz-progress-bar": ProgressBar,
    "quiz-card": Card,
    "quiz-title": Title
  }
};
</script>
