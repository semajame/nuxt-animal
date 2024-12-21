<template>
  <div class="mx-auto px-4 py-8 bg-gradient-to-br bg-zinc-950 min-h-screen">
    <AnimalsInfo />
  </div>
</template>

<script setup>
import { useHead } from "#app";

// Set up meta tags for the page
useHead({
  title: "Animals - Wild Kingdom", // Set the dynamic page title
  meta: [
    {
      hid: "description", // Use `hid` to ensure meta tags are uniquely identified
      name: "description",
      content:
        "Animal Page, where you can search over 1000 animals and their facts. ", // Add a meaningful description
    },
  ],
});
</script>
