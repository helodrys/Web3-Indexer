import { prisma } from "../db/prisma.js";
import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { start } from "node:repl";
dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_KEY);

const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const USDC_ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

const contract = new ethers.Contract(USDC_ADDRESS, USDC_ABI, provider);

export async function startListerner() {
    console.log("Start Listener...");

    contract.on("Transfer", async (from, to, value, event) => {
    await prisma.transferEvent.create({
      data : {
        txHash: event.log.transactionHash,
        blockNumber: event.log.blockNumber,
        from,
        to,
        value: value.toString()
      }
    })
    console.log(`Saved ${from} -> ${to} | ${value.toString()} units`);
  })
}
startListerner().catch((error) => {
    console.error("Error starting listener:", error);
});