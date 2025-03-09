export default defineNuxtConfig({
  app: {
    head: {
      title: "Ethereum Balance Checker - Check ETH Wallet Balance",
      link: [{ rel: "icon", type: "image/png", href: "/eth.png" }],
      meta: [
        { name: "description", content: "Easily check the Ethereum (ETH) balance of any wallet address. Fast, secure, and simple ETH balance lookup." },
        { name: "keywords", content: "Ethereum, ETH, balance checker, crypto wallet, blockchain, Web3" },
        { property: "og:title", content: "Ethereum Balance Checker" },
        { property: "og:description", content: "Easily check any ETH wallet balance in real-time." },
        { property: "og:image", content: "/eth.png" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://ether-checker.vercel.app" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Ethereum Balance Checker" },
        { name: "twitter:description", content: "Easily check the Ethereum balance of any wallet address." },
        { name: "twitter:image", content: "/eth.png" },
      ],
    },
  },


  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,

    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  vite: {
    define: {
      global: "window", // Fixes `global is not defined`
    },
  },
});