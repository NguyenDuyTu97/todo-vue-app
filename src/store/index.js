import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos(state) {
      console.log(state, 'state 1122')

      return state.todos.filter((todo) => todo.done)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store
