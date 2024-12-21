<template>
  <div class="mx-auto px-4 py-12">
    <section class="text-center my-16">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">Wild Kingdom</h1>
      <p class="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed">
        We are passionate about bringing the incredible world of animals closer
        to you. Our mission is to educate, inspire, and promote conservation
        through comprehensive and engaging animal facts.
      </p>
    </section>

    <section class="grid md:grid-cols-2 gap-12 my-20">
      <div>
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Our Story</h2>
        <p class="text-gray-400 leading-relaxed mb-4 text-xl">
          Wild Kingdom began with a simple dream: to create a comprehensive
          platform that celebrates the incredible diversity of animal life on
          our planet. Founded by a team of wildlife enthusiasts and conservation
          advocates, we believe that understanding leads to appreciation, and
          appreciation leads to protection.
        </p>
        <p class="text-gray-400 leading-relaxed text-xl">
          What started as a small project has grown into a global resource,
          connecting people with the fascinating world of animals through
          detailed, scientifically accurate, and engaging information.
        </p>
      </div>
      <!-- <div class="flex items-center justify-center">
        <img
          src="/api/placeholder/500/400"
          alt="Wild Kingdom Team"
          class="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div> -->
    </section>

    <section class="px-2 py-12 mb-16">
      <h2 class="text-3xl font-semibold text-blue-800 text-center mb-8">
        Our Team
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="text-center bg-zinc-800 py-6 px-2 rounded-lg shadow-md"
        >
          <img
            :src="member.image"
            :alt="member.name"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          />
          <h3 class="text-xl font-bold text-blue-900 mb-2">
            {{ member.name }}
          </h3>
          <p class="text-gray-400 mb-2">{{ member.role }}</p>
          <p class="text-gray-500">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <section class="text-center my-20">
      <h2 class="text-3xl font-semibold text-blue-800 mb-8">
        Our Commitment to Conservation
      </h2>
      <div class="max-w-4xl mx-auto">
        <p class="text-gray-400 leading-relaxed mb-6">
          We are more than just an information platform. For every 100 users who
          engage with our content, we donate to wildlife conservation efforts
          through our partner organizations.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mt-10">
          <div class="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-blue-900 mb-4">
              Environmental Education
            </h3>
            <p class="text-gray-400">
              Raising awareness about wildlife conservation and environmental
              protection.
            </p>
          </div>
          <div class="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-blue-900 mb-4">
              Habitat Preservation
            </h3>
            <p class="text-gray-400">
              Supporting projects that protect and restore natural habitats
              worldwide.
            </p>
          </div>
          <div class="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold text-blue-900 mb-4">
              Research Support
            </h3>
            <p class="text-gray-400">
              Funding scientific research to better understand and protect
              animal species.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from "#app";

// Set up meta tags for the page
useHead({
  title: "About - Wild Kingdom", // Set the dynamic page title
  meta: [
    {
      hid: "description", // Use `hid` to ensure meta tags are uniquely identified
      name: "description",
      content:
        "About Page, where our story started and about, team and mission. ", // Add a meaningful description
    },
  ],
});

const teamMembers = [
  {
    name: "Emma Rodriguez",
    role: "Founder & Chief Conservationist",
    image:
      "https://cdn.prod.website-files.com/63f8c395b4c0fa2184b7cc93/63f8c396b4c0fa3332b7cd57_Member-Photo-Close-up-3.webp",
    bio: "Wildlife biologist with 15 years of field experience across multiple continents.",
  },
  {
    name: "Michael Chen",
    role: "Lead Researcher",
    image:
      "https://cdn.prod.website-files.com/63f8c395b4c0fa2184b7cc93/63f8c396b4c0fa6d36b7cd5b_Member-Photo-Close-up-11.webp",
    bio: "Zoologist specializing in animal behavior and ecological systems.",
  },
  {
    name: "Sarah Thompson",
    role: "Conservation Director",
    image:
      "https://cdn.prod.website-files.com/63f8c395b4c0fa2184b7cc93/63f8c396b4c0fa409db7cd72_Member-Photo-Close-up-10.webp",
    bio: "Expert in international wildlife conservation strategies and policy.",
  },
];
</script>
