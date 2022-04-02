const OwnableContract = artifacts.require("Ownable")

contract("Ownable", async (accounts) => {

  it("Testing Constructor",async () => {
    const instance = await OwnableContract.deployed();

    assert.equal(await instance.owner(),accounts[0])
  })

  it("Testing onlyOwnerCanCall()",async () => {
    const instance = await OwnableContract.deployed();

    assert.equal(await instance.onlyOwnerCanCall(),true)

    try {
      await instance.onlyOwnerCanCall({ from :accounts[1] })
    }catch(e){
      assert.equal(e.message,"Returned error: VM Exception while processing transaction: revert Not Owner")
    }
  })

  it("Testing anyoneCanCall()",async () => {
    const instance = await OwnableContract.deployed();

    assert.equal(await instance.anyoneCanCall(),true)
    assert.equal(await instance.anyoneCanCall({ from: accounts[1] }),true)

  })

  it("Testing setOwner()",async () => {
    const instance = await OwnableContract.deployed()
    const currentOwner = accounts[0]
    const newOwner = accounts[1]

    try{
      await instance.setOwner(currentOwner)
    }catch(e){
      assert.equal(e.reason,"Cant be the same address as the current owner address")
    }

    assert.equal(await instance.owner(),currentOwner)
    await instance.setOwner(newOwner)
    assert.equal(await instance.owner(),newOwner)


  })

})
