<!--Back to job listing button -->
<script setup>
//Imports so Vue Router navigation is available(creates navigation links without reloading the page)
import { RouterLink } from "vue-router";
</script>
<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <!--Arrow styled with tailwind-->
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
