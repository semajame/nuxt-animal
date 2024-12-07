<template>
  <div class="bg-black w-100 min-h-screen">
    <header class="bg-zinc-950 shadow-md">
      <div
        class="container mx-auto flex justify-between items-center py-4 px-4"
      >
        <NuxtLink to="/" class="flex items-center">
          <!-- <img
            src="/api/placeholder/50/50"
            alt="Wild Kingdom Logo"
            class="h-10 w-10 mr-3"
          /> -->
          <h3 class="text-2xl font-bold text-white">Wild Kingdom</h3>
        </NuxtLink>

        <div class="relative">
          <!-- Mobile Hamburger Button -->
          <button
            @click="toggleMenu"
            class="md:hidden sticky top-4 right-4 z-50 w-10 h-5 flex flex-col justify-between"
            aria-label="Toggle mobile menu"
          >
            <span
              class="w-full hamburger bg-white transition-all duration-300"
              :class="{
                'rotate-45 translate-y-2': isMenuOpen,
                '': !isMenuOpen,
              }"
            ></span>
            <span
              class="w-full hamburger bg-white transition-all duration-300"
              :class="{
                'opacity-0': isMenuOpen,
                '': !isMenuOpen,
              }"
            ></span>
            <span
              class="w-full hamburger bg-white transition-all duration-300"
              :class="{
                '-rotate-45 -translate-y-2': isMenuOpen,
                '': !isMenuOpen,
              }"
            ></span>
          </button>

          <!-- Mobile Menu Overlay -->
          <div
            class="fixed inset-0 bg-zinc-950 transform transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center space-y-6"
            :class="{
              'translate-x-0': isMenuOpen,
              'translate-x-full': !isMenuOpen,
            }"
          >
            <nav class="flex flex-col items-center space-y-4">
              <NuxtLink
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                class="text-2xl hover:text-gray-600 transition-colors header-p text-white"
                @click="toggleMenu"
              >
                {{ item.name }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-4 items-center">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="hover:text-gray-600 transition-colors text-white header-p"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <div>
      <slot />
    </div>
  </div>

  <!-- Footer (Existing) -->
  <footer class="text-white py-20 bg-zinc-950">
    <div class="mx-auto px-4 text-center">
      <p>© 2024 Wild Kingdom Explorer. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Animals", path: "/animals" },
  { name: "About", path: "/about" },
];
</script>

<style lang="scss" scoped></style>
