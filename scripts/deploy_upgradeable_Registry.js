const { ethers, upgrades } = require("hardhat")

const main = async () => {
    const Registry = await ethers.getContractFactory("PlaneRegistry")
    console.log(`\nDeploying Registry\n`)

    const registry = await upgrades.deployProxy(Registry, {
        initializer: "nameOfPlanes"
    })
    const txReceipt = await registry.deployed()
    console.log(txReceipt)
    const txAddress = registry.address

    console.log("\n--------------------Deployed--------------------")
    console.log(`\nFactory deployed to: ${txAddress}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
