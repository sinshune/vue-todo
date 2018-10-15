// 可以理解为, 相当于组件中的computed
export default {
  fullName (state) {
    return `Name: ${state.firstName + state.lastName}`;
  }
}