// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  components: true,
  compatibilityDate: "2024-11-01",
  ssr: true, // Ensure server-side rendering is enabled

  devtools: { enabled: true },

  app: {
    head: {
      title: "Wild Kingdom",
      meta: [
        {
          name: "description",
          content:
            "Wild Kingdom is a wildlife website, where you can search for animal facts.",
        },
      ],
    },
  },
});
