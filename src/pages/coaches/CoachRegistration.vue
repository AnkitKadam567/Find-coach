<template>
  <section>
    <base-card>
      <h2>Register as a coach</h2>
      <coach-form @saved-data="onDataSaved"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: { CoachForm },
  methods: {
    onDataSaved(savedData) {
      this.$store.dispatch("coaches/registerCoach", savedData);
    },
  },
};
</script>
