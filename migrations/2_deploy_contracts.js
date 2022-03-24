/* eslint-disable no-undef */
const AMSToken = artifacts.require("AMSToken");
const DaiToken = artifacts.require("DaiToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts ){
// Deploy Mock DAI Token
await deployer.deploy(DaiToken);
const daiToken = await DaiToken.deployed();

// Deploy Mock Dapp Token
await deployer.deploy(AMSToken);
const amsToken = await AMSToken.deployed();

// Deploy TokenFarm
await deployer.deploy(TokenFarm, amsToken.address, daiToken.address);
const tokenFarm = await TokenFarm.deployed();

// Transfer all tokens to TokenFarm (1 million)
await amsToken.transfer(tokenFarm.address, "1000000000000000000000000");

// Transfer 1000 Mock DAI tokens to investor
await daiToken.transfer(accounts[1], "1000000000000000000000")

}