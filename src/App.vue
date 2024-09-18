<template>
  <div class="container mx-auto max-w-7xl px-6 flex-grow">
    <Header />
    <ListForm />
  </div>
  <Footer msg="Created with VueJS + Vite + Tailwindss" />
</template>

<script>
import Header from "./components/Header.vue";
import ListForm from "./components/ListForm.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    ListForm,
    Footer,
  },
};
</script>

<style scoped></style>
