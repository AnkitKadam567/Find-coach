<template>
  <section>FILTER</section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h1 v-else>No Coaches Found</h1>
    </section>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  components: { CoachItem, BaseCard, BaseButton },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
