<template>
  <div
    class="fixed py-5 bottom-0 bg-secondary flex w-full items-center justify-center text-sm text-white font-medium text-center"
  >
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>
