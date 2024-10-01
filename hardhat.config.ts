import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
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
  },
  etherscan: {
    apiKey: {
      snowtrace: "snowtrace", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "snowtrace",
        chainId: 43113,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://avalanche.testnet.localhost:8080"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};

export default config;
