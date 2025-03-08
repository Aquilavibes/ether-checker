<template>
    <div>
      <div
        id="cr-widget-marquee"
        data-coins="bitcoin,ethereum,tether,eos,ripple,xrp-on-solana,monero,litecoin,bnb,solana,usdcoin,dogecoin,tron,cardano,lido-staked-ether,pi-network-1,wrapped-bitcoin,chainlink,leobitfinex"
        data-theme="dark"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
      >
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Dynamically add the script to the page after component is mounted
      const script = document.createElement("script");
      script.src = "https://cryptorank.io/widget/marquee.js";
      script.async = true;
      document.body.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles for your component */
  </style>
  