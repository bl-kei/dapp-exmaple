import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const ETHEREUM_CHAIN_ID = '5';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    ethereum: {
      url: process.env.ETHEREUM_ENDPOINT_URL || '',
      accounts:
        process.env.WALLET_MAINNET_PRIVATE_KEY !== undefined
          ? [process.env.WALLET_MAINNET_PRIVATE_KEY]
          : [],
    },
    goerli: {
      url: process.env.GOERLI_ENDPOINT_URL || '',
      accounts:
        process.env.WALLET_TESTNET_PRIVATE_KEY !== undefined
          ? [process.env.WALLET_TESTNET_PRIVATE_KEY]
          : [],
    },
    sepolia: {
      url: process.env.SEPOLIA_ENDPOINT_URL || '',
      accounts:
        process.env.WALLET_TESTNET_PRIVATE_KEY !== undefined
          ? [process.env.WALLET_TESTNET_PRIVATE_KEY]
          : [],
    },
    polygon: {
      url: process.env.POLYGON_ENDPOINT_URL || '',
      accounts:
        process.env.WALLET_MAINNET_PRIVATE_KEY !== undefined
          ? [process.env.WALLET_MAINNET_PRIVATE_KEY]
          : [],
    },
    mumbai: {
      url: process.env.WALLET_TESTNET_PRIVATE_KEY || '',
      accounts:
        process.env.WALLET_TESTNET_PRIVATE_KEY !== undefined
          ? [process.env.WALLET_TESTNET_PRIVATE_KEY]
          : [],
    },
  },
  etherscan: {
    apiKey:
      process.env.DEFAULT_CHAIN_ID == ETHEREUM_CHAIN_ID
        ? process.env.ETHERSCAN_API_KEY
        : process.env.POLYGONSCAN_API_KEY,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 40000,
  },
  gasReporter: {
    enabled: true,
  },
};

export default config;
