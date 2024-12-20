<template>
  <main class="min-h-screen bg-gradient-to-br bg-zinc-950">
    <!-- Hero Section (Existing) -->
    <div class="background relative">
      <section
        class="mx-auto px-4 min-h-screen text-center relative z-10 pt-20"
      >
        <h1
          class="text-3xl sm:text-5xl font-extrabold text-white mb-4 flex place-items-center justify-center mx-auto max-w-[800px]"
        >
          Explore the amazing world of animals
        </h1>
        <p class="text-md sm:text-xl text-white max-w-2xl mx-auto my-10">
          Discover fascinating facts about the most incredible animals on our
          planet. Dive deep into their world, explore their habitats, and
          uncover amazing details.
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <NuxtLink
            to="/about"
            class="bg-transparent border hover:bg-white hover:text-black text-white px-6 py-3 rounded-sm text-sm font-bold transition-colors"
          >
            ABOUT
          </NuxtLink>
          <NuxtLink
            to="/animals"
            class="bg-orange-500 text-white px-6 py-3 rounded-sm text-sm hover:bg-white hover:text-black font-bold transition-colors"
          >
            SEARCH ANIMALS
          </NuxtLink>
        </div>
      </section>
      <div class="banner-overlay"></div>
    </div>

    <!-- Animal Categories (Existing) -->
    <section class="mx-auto px-4 py-20 container">
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="category in animalCategories"
          :key="category.name"
          class="shadow-lg rounded-lg bg-zinc-900"
        >
          <div class="w-full">
            <NuxtImg
              :src="category.image"
              alt="animal image"
              class="h-48 w-full rounded-lg object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <h2 class="text-2xl text-center font-bold text-white">
                {{ category.name }}
              </h2>
            </div>
            <p class="text-gray-400 mb-4 text-center">
              {{ category.description }}
            </p>
            <NuxtLink
              :to="category.link"
              class="block w-full text-center bg-orange-500 hover:bg-white hover:text-black text-white py-2 rounded transition-colors header-p"
            >
              Explore {{ category.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section (Existing) -->
    <section
      class="text-center min-h-screen grid place-items-center our-mission relative"
    >
      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-6">Our Mission</h2>
        <p class="max-w-3xl mx-auto text-xl text-white px-2">
          We're passionate about connecting people with the incredible diversity
          of animal life on our planet. Through detailed, engaging information,
          we aim to inspire curiosity and promote conservation awareness.
        </p>
      </div>
      <div class="banner-overlay"></div>
    </section>

    <!-- Featured Wildlife Section -->
    <section class="bg-zinc-950 py-24 container mx-auto">
      <div class="px-4">
        <h2 class="text-4xl font-bold text-blue-900 text-center mb-10">
          Featured Wildlife Spotlight
        </h2>

        <div class="grid sm:grid-cols-3 gap-4 items-start mt-10">
          <div class="bg-zinc-900 p-5 rounded-md h-full">
            <h3 class="text-2xl font-semibold text-blue-800 mb-4">
              Wildlife Conservation News
            </h3>
            <p class="text-gray-400 mb-4">
              Highlight recent success stories or breakthroughs in wildlife
              conservation efforts, such as the recovery of a species.
            </p>
            <NuxtLink
              to="/"
              class="inline-block bg-orange-500 text-white px-5 py-1 rounded-sm hover:bg-white hover:text-black transition-colors header-p"
            >
              Learn More
            </NuxtLink>
          </div>

          <div class="bg-zinc-900 p-5 rounded-md h-full">
            <h3 class="text-2xl font-semibold text-blue-800 mb-4">
              Educational Resources
            </h3>
            <p class="text-gray-400 mb-4">
              Information on local or regional wildlife centers, zoos, or nature
              reserves that offer educational programs, guided tours, or
              hands-on learning opportunities.
            </p>
            <NuxtLink
              to="/"
              class="inline-block bg-orange-500 text-white px-5 py-1 rounded-sm hover:bg-white hover:text-black transition-colors header-p"
            >
              Learn More
            </NuxtLink>
          </div>

          <div class="bg-zinc-900 p-5 rounded-md h-full">
            <h3 class="text-2xl font-semibold text-blue-800 mb-4">
              Endangered Species Highlight
            </h3>
            <p class="text-gray-400 mb-4">
              Each month, we shine a light on a critically endangered species,
              sharing their unique story, challenges, and the conservation
              efforts working to protect them.
            </p>
            <NuxtLink
              to="/"
              class="inline-block bg-orange-500 text-white px-5 py-1 rounded-sm hover:bg-white hover:text-black transition-colors header-p"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="stay-background py-16 relative">
      <div class="banner-overlay"></div>
      <div class="container mx-auto px-4 text-center relative z-10 p-20">
        <h2 class="text-4xl font-bold text-white mb-6">
          Stay Connected with Wildlife News
        </h2>
        <p class="text-white mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive monthly updates about
          wildlife, conservation efforts, and fascinating animal discoveries.
        </p>
        <form @submit.prevent="subscribeNewsletter" class="mx-auto">
          <div class="flex flex-col gap-2 sm:flex-row max-w-sm mx-auto">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
              require
              class="flex-grow px-4 py-3 rounded-sm focus:outline-none header-p"
            />
            <button
              type="submit"
              class="max-w-sm mx-auto bg-orange-500 text-white px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-colors header-p"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
const email = ref("");

const animalCategories = [
  {
    name: "We are changing",
    description: "We’re changing our ways on how we treat our animals",
    link: "/",
    image: "/assets/img/gorilla.webp",
  },
  {
    name: "Act for Wildlife",
    description: "We won’t stand back and we won’t give up.",
    link: "/",
    image: "/assets/img/deer.webp",
  },
  {
    name: "Support Wildlife",
    description:
      "Support wildlife and its inhabitants by not destroying and killing animals.",
    link: "/",
    image: "/assets/img/cow.webp",
  },
];

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
  console.log("Subscribing with email:", email.value);
  // You would typically call an API or service here
  alert("Thank you for subscribing!");
  email.value = ""; // Reset email field
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}
</style>
