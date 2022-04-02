const OwnableContract = artifacts.require("Ownable")

module.exports = function (deployer) {
  deployer.deploy(OwnableContract);
};
