<template>
    <CryptoWidget />
  <div class="min-h-screen text-white flex flex-col items-center justify-center px-6 text-center">
    <!-- Logo as Text -->
    <header class="lg:text-3xl font-bold mb-10 mt-4 top-[80px] absolute left-[30px] sm:text-[30px]">$Ether-Check</header>
    
    <!-- Text Section -->
    <div class="w-full max-w-2xl">
      <h1 class="text-4xl lg:text-5xl font-mono leading-snug">
        Check how broke or rich <br /> someone is with just the <br /> ETH Address
      </h1>
      <br><br>
      <p class="text-white/80 mt-4 text-lg">
        Start having fun by monitoring people's address
      </p>
      <br><br>
      <NuxtLink to="/checkEth"><button class="mt-6 px-6 py-3 bg-gradient-to-r from-[#ea51c1] via-[#0B0C10] to-[#4B0082] text-white rounded-lg text-lg shadow-lg w-full max-w-sm">
        Start Checking
      </button> </NuxtLink>
    </div>
  </div>
</template>




<script setup lang="ts">

definePageMeta({
    layout: 'default'
})
</script>
