<template>
    <CryptoWidget/>
    <div class="min-h-screen text-white flex items-center justify-center px-4 pt-[200px] lg:pl-96">
    <div class="bg-gradient-to-r from-[#0a1118] via-[#2e334a] to-[#415990] rounded-lg lg:w-[500px] lg:h-[250px] custom-sm-box lg:mr-[400px] lg:mb-[250px]">
      <p class="lg:text-[30px] text-center custom-sm-text">Check ETH address balance</p>
      <b><hr></b>
      <br><br>
      <input 
        type="text" 
        placeholder="0x4Address" 
        class="border border-gray-300 outline outline-2 outline-black-100 p-2 rounded lg:w-[400px] lg:pr-[50px] lg:ml-[30px] custom-sm-input"
      >
      <br><br><br>
      <button class="bg-white text-black rounded lg:w-[200px] lg:ml-[150px] lg:h-[40px] font-bold custom-sm-button">
        Check balance
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* ✅ Small Screen (sm:) Styles using Vanilla CSS */
@media (max-width: 640px) {
  .custom-sm-box {
    height: 250px !important;
    margin-top: -200px !important;
  }
  
  .custom-sm-text {
    font-size: 30px !important;
  }

  .custom-sm-input {
    width: 300px !important;
    margin-left:  40px;
  }

  .custom-sm-button {
    width: 200px !important;
    height: 40px !important;
    margin-left: 85px !important;
   
  }
}
</style>
