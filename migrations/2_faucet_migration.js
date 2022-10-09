const FaucetContract = artifacts.require("Faucet");

module.exports = function (deployer) { //deployer migrates contract to Ganash
    deployer.deploy(FaucetContract)
}