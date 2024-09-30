import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const AVALANCHE_FUJI_RPC_URL: string = process.env.AVALANCHE_FUJI_RPC_URL || "";
const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "avalanche_fuji",
  networks: {
    avalanche_fuji: {
      chainId: 43113,
      url: AVALANCHE_FUJI_RPC_URL,
      accounts: [
        PRIVATE_KEY,
      ],
    }
  }
};

export default config;
