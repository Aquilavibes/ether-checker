<template>
  <CryptoWidget />

  <div class="min-h-screen bg-gradient-to-r from-[#001F3F] via-[#0B0C10] to-[#4B0082] text-white flex items-center justify-center px-4 pt-[200px] lg:pl-96 absolute">
    <BalanceModal :isOpen="isModalOpen" :balance="balance" :error="error" :closeModal="closeModal" />

    <div class="bg-gradient-to-r from-[#0a1118] via-[#2e334a] to-[#415990] rounded-lg lg:w-[500px] lg:h-[250px] custom-sm-box lg:mr-[400px] lg:mb-[250px]">
      <p class="lg:text-[30px] text-center custom-sm-text">Check ETH Address Balance</p>
      <b><hr></b>
      <br><br>
      <input 
        type="text" 
        v-model="address"
        placeholder="0x4Address" 
        class="border border-gray-300 outline outline-2 outline-black-100 p-2 rounded lg:w-[400px] lg:pr-[50px] lg:ml-[30px] custom-sm-input text-black"
      > 
      <br><br><br>
      <button class="bg-white text-black rounded lg:w-[200px] lg:ml-[150px] lg:h-[40px] font-bold custom-sm-button" 
        @click="checkBalance"
      >
        Check Balance
      </button>
      <div v-if="loading" class="mt-2 text-gray-500">Fetching balance...</div>
      <div v-if="error" class="mt-2 text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getEthBalance } from "@/utils/ethers";

const address = ref("");
const balance = ref(null);
const error = ref(null);
const isModalOpen = ref(false);
const loading = ref(false);

const checkBalance = async () => {
  error.value = null;
  balance.value = null;
  loading.value = true;

  try {
    balance.value = await getEthBalance(address.value);
    isModalOpen.value = true;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
/* ✅ Small Screen (sm:) Styles */
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
