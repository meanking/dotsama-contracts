import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer"

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  contractSizer: {
      alphaSort: true,
      runOnCompile: true,
  },
};

export default config;
