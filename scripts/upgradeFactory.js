const { ethers, upgrades } = require("hardhat")

const factoryAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const main = async () => {
    const RegistryV2 = await ethers.getContractFactory("PlaneRegistryV2")
    console.log(`\nUpgrading Registry\n`)

    const registryV2 = await upgrades.upgradeProxy(factoryAddress, RegistryV2)
    console.log(registryV2)
    const txAddress = registryV2.address
    console.log(`\nV2 Contract Deployed To --> ${txAddress}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
