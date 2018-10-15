export default {
  updateCountAsync ({ commit }, data) {
    setInterval(() => {
      commit('updateCount', data.num++);
    }, data.time)
  }
}