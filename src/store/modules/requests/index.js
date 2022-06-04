import mutation from "./mutation.js";
import actions from "./actions.js";

export default {
  nameSpace: true,
  state() {
    return {
      requests: [],
    };
  },
  mutation,
  actions,
};
