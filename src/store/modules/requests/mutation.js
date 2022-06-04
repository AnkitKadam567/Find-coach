export default {
  addRequest(state, payload) {
    console.log("ADDING", payload);
    state.requests.push(payload);
  },
};
