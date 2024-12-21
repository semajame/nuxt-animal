<template>
  <div
    class="min-h-screen bg-gradient-to-br bg-black flex items-center justify-center p-4"
  >
    <div class="bg-black shadow-2xl rounded-xl overflow-hidden max-w-lg w-full">
      <div class="p-8 text-center">
        <div class="mb-6">
          <svg
            class="mx-auto h-24 w-24 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 class="text-5xl font-bold text-gray-800 mb-4">
          {{ statusCode }}
        </h1>

        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          {{ message }}
        </h2>

        <div class="flex justify-center space-x-4">
          <NuxtLink
            to="/"
            class="px-6 py-3 bg-orange-500 text-white rounded-sm hover:bg-transparent transition-colors duration-300 flex items-center space-x-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="header-p">Back to home</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "#app";

useHead({
  title: "Error - Wild Kingdom", // Set the dynamic page title
  meta: [
    {
      hid: "description", // Use `hid` to ensure meta tags are uniquely identified
      name: "description",
      content: "Error Page, the page youre looking for does not exist. ", // Add a meaningful description
    },
  ],
});

defineProps({
  statusCode: {
    type: Number,
    default: 500,
  },
  message: {
    type: String,
    default: "Oops! Something went wrong",
  },
});

const handleReload = () => {
  window.location.reload();
};
</script>
