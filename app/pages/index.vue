<template>
    <CryptoWidget />
  <div class="min-h-screen text-white flex flex-col items-center justify-center px-6">
    <!-- Header -->
    <header class="text-3xl font-bold mb-[80px] top-[100px] absolute">$Ether-Check</header>
    
    <!-- Content Wrapper -->
    <div class="flex flex-col lg:flex-row items-center text-center lg:text-left">
      <!-- Text Section -->
      <div class="lg:w-1/2 mb-10 lg:mb-0">
        <h1 class="text-4xl lg:text-5xl font-mono leading-snug">
          Check how broke or rich <br /> someone is with just the <br /> ETH Address
        </h1>
        <p class="text-white/80 mt-4 text-lg">
          Start having fun by monitoring people's address
        </p>
        <button class="mt-6 px-6 py-3 bg-gradient-to-r from-[#ea51c1] via-[#0B0C10] to-[#4B0082] text-white rounded-lg text-lg shadow-lg">
          Start Checking
        </button>
      </div>
      
      <!-- Ethereum Image -->
      <div class="lg:w-1/2 flex justify-center lg:ml-[60px]">
        <img src="/eth.png" alt="Ethereum image" class="w-64 sm:w-80 lg:w-[900px] lg:h-[700px]"
        
        
        
        
        />
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
definePageMeta({
    layout: 'default'
})
</script>
