import { ethers } from "ethers";

export async function getEthBalance(address) {
  try {
    if (!ethers.isAddress(address)) {
      throw new Error("Invalid Ethereum address");
    }

    const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth/b0b551a8b2c5b7236e99982a57ae1b7bef7991a0b062a1dbe005cd37bbe7856e"); // Use a free RPC provider
    const balance = await provider.getBalance(address);
    
    return ethers.formatEther(balance); // Convert balance from Wei to ETH
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
}
