require('dotenv').config()

const HDWalletProvider = require("@truffle/hdwallet-provider");
const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "dapp/contracts"),
  plugins: ['truffle-plugin-verify','truffle-flatten'],

  api_keys: {
    etherscan: process.env.ETHEREUM_ETHERSCAN_API_KEY,
    bscscan: process.env.BSC_ETHERSCAN_API_KEY,
    polygonscan: process.env.POLYGON_ETHERSCAN_API_KEY,
    ftmscan: process.env.FANTOM_ETHERSCAN_API_KEY,
    hecoinfo: 'MY_API_KEY',
    moonscan: 'MY_API_KEY',
    bttcscan: 'MY_API_KEY',
    aurorascan: 'MY_API_KEY'
  },

  dashboard: {
    port: 24012,
  }

  networks: {
    ethereum: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.ETHEREUM_URL),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.BSC_URL),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.POLYGON_URL),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    avalanche: {
      chainId: 43114,
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.AVALANCHE_URL),
      network_id: 43114,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    fantom: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.FANTOM_URL),
      network_id: 250,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },


    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_TESTNET_URL),
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.BSC_TESTNET_URL),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.MUMBAI_TESTNET_URL),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    fuji: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.FUJI_TESTNET_URL),
      network_id: 43113,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    fantomTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.FANTOM_TESTNET_URL),
      network_id: 4002,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '*',
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*',
    }


  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },



  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
