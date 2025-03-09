<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black/30">
    <div class="card">
      <div class="tools flex items-center space-x-2">
        <div class="circle"><span class="red box"></span></div>
        <div class="circle"><span class="yellow box"></span></div>
        <div class="circle"><span class="green box"></span></div>
      </div>
      
      <div class="card__content mt-4">
        <p class="title text-xl font-bold text-black">ETH Balance</p>
        <hr class="border-black/50 my-2">
        <p v-if="error" class="content text-red-500">{{ error }}</p>
        <p v-else class="content">ETH💰: <b>{{ balance }}</b> <br>Status: <b class="act">Active</b> <br>Layer: EVM</p>
      </div>
      <button class="bg-white text-black w-[60px] rounded ml-10" @click="closeModal">Okayyy</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  balance: String,
  error: String,
  closeModal: Function,
});
</script>

<style scoped>
.act {
    color: green;
}
.card {
    width: 220px;
    height: 250px;
    background-color: #acaba9;
    border-radius: 8px;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
}
.tools {
    display: flex;
    align-items: center;
    padding: 9px;
    border-radius: 8px;
    background: #454a50;
}
.circle {
    padding: 0 4px;
}
.card__content {
    height: 100%;
    background-color: black;
    padding: 10px;
}
.box {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.red {
    background-color: #ff605c;
}
.yellow {
    background-color: #ffbd44;
}
.green {
    background-color: #00ca4e;
}
</style>
