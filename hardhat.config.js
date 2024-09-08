require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    spicy: {
      url: "https://spicy-rpc.chiliz.com/",
      chainId: 88882,
      accounts: ["443adc8a9b7288f40d9c96df87d66bfb09fa410f5e438c285deb22f763eab6c0"] 
    }
  }
};
