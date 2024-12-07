<template>
  <div class="mx-auto p-4 container">
    <div class="my-10">
      <h2 class="text-center text-4xl mb-5 text-blue-900 font-bold">
        Search for Animals
      </h2>
      <form
        @submit.prevent="searchAnimals"
        class="flex justify-center header-p"
      >
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search animals..."
          class="py-2 px-4 border border-gray-300 rounded-sm focus:outline-none w-[500px] outline-none"
        />
        <button
          type="submit"
          class="ml-2 px-4 py-2 bg-orange-400 text-white rounded-sm"
        >
          Search
        </button>
      </form>
    </div>

    <div v-if="pending" class="text-center mt-4 text-white">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500 mt-4">
      {{ error }}
    </div>

    <div
      v-else-if="paginatedAnimals.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"
    >
      <div
        v-for="animal in paginatedAnimals"
        :key="animal.name"
        class="bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
      >
        <div class="p-4">
          <h3 class="text-xl font-bold">{{ animal.name }}</h3>
          <p class="text-gray-200 italic">
            {{ animal.characteristics.slogan || "No slogan available" }}
          </p>
        </div>

        <!-- Taxonomy Section -->
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-4 border-b pb-2">Taxonomy</h3>
          <ul class="space-y-2">
            <li
              v-for="(value, key) in animal.taxonomy"
              :key="key"
              class="flex justify-between"
            >
              <span class="font-medium capitalize text-white"
                >{{ key.replace("_", " ") }}:</span
              >
              <span class="text-white">{{ value }}</span>
            </li>
          </ul>
        </div>

        <div class="p-4">
          <h4 class="text-lg font-semibold">Quick Facts</h4>
          <div class="grid grid-cols-2 gap-4 mt-2">
            <div
              v-for="(value, key) in animal.characteristics"
              :key="key"
              class="bg-zinc-900 p-2 rounded"
            >
              <p class="text-xs text-gray-400 capitalize">
                {{ key.replace("_", " ") }}
              </p>
              <p class="font-medium text-white text-sm">
                {{ value || "N/A" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div v-else class="text-center mt-4 text-gray-500">No animals found.</div>
    <div class="flex justify-center mt-6" v-if="totalPages > 1">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="{
          'bg-blue-500 text-white': page === currentPage,
          'bg-gray-300 text-gray-800': page !== currentPage,
        }"
        class="px-4 py-2 mx-1 rounded"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const animals = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(4); // Number of items per page
const pending = ref(false);
const error = ref(null);

// Paginated animals for the current page
const paginatedAnimals = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return animals.value.slice(start, end);
});

// Total number of pages
const totalPages = computed(() =>
  Math.ceil(animals.value.length / itemsPerPage.value)
);

// Search Animals
const searchAnimals = async () => {
  if (!searchQuery.value.trim()) {
    alert("Please enter a search query.");
    return;
  }

  pending.value = true;
  error.value = null;
  currentPage.value = 1;

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/animals?name=${searchQuery.value}`,
      {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
      }
    );
    const data = await response.json();
    animals.value = data || [];
  } catch (err) {
    error.value = err.message || "Something went wrong";
  } finally {
    pending.value = false;
  }
};
</script>
