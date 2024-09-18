<template>
  <ul>
    <ListItem
      v-for="(todo, index) in todos"
      :key="index"
      :item="todo"
      :removeTodo="() => removeTodo(index)"
    />
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: {
    ListItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  name: "List",
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
