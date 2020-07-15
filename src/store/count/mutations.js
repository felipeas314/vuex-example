const INCREASE = (state) => {
  console.log('Mutation INCREASE');
  state.value = state.value + 1;
};

const DECREASE = (state) => {
  state.value = state.value - 1;
}

export default {
  INCREASE,
  DECREASE
};