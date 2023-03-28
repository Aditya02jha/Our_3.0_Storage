require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};

// const { utils } = require('ethers');

// module.exports = {
//   networks: {
//     rinkeby: {
//       url: 'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID',
//       accounts: [
//         {
//           privateKey: utils.hexlify(utils.randomBytes(32)),
//           balance: utils.parseEther('10')
//         },
//         {
//           privateKey: '0x0123456789012345678901234567890123456789012345678901234567890123',
//           balance: utils.parseEther('5')
//         }
//       ]
//     }
//   },
//   solidity: {
//     version: '0.8.4',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//          artifacts: "./src/artifacts",
//        },

// };
