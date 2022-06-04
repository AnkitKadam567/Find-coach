<template>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
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
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: { CoachItem, BaseCard, BaseButton, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontEnd: true,
        backEnd: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      console.log("coaches", coaches);
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>
