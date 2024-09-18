<template>
  <li
    class="mb-2 flex hover:opacity-80 justify-between items-center p-3 shadow-lg border border-neutral-400/20 rounded-lg"
  >
    <span class="font-medium">{{ item }}</span>
    <button
      @click="removeTodo(index)"
      class="text-red-500 hover:text-red-700 font-medium"
    >
      Remove
    </button>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: String,
      required: true,
    },
    removeTodo: {
      type: Function,
      required: true,
    },
  },
};
</script>
