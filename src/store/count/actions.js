const increase = (context) => {
  context.commit('INCREASE');
  console.log('Action increase')
}

const decrease = (context) => {
  context.commit('DESCREASE');
  console.log('Action decrease')
}

export default {
  increase,
  decrease
}