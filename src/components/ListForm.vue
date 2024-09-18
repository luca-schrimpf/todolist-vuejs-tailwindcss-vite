<template>
  <form @submit.prevent="addTodo" class="mb-4 flex">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Enter new task"
      class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/40"
    />
    <button
      type="submit"
      class="ml-2 bg-secondary text-white font-medium px-4 py-2 rounded-lg hover:bg-secondary/80"
    >
      Add +
    </button>
  </form>
  <List :todos="todos" :removeTodo="() => removeTodo()" />
</template>

<script>
import List from "./List.vue";

export default {
  components: {
    List,
  },

  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo.trim());
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
