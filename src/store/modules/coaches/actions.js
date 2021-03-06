export default {
  registerCoach(context, data) {
    const coachData = {
      id: new Date().toISOString(),
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };
    context.commit("registerCoach", coachData);
  },
};
