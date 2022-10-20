const hre = require("hardhat")

async function main() {
    const planeInteractor = await hre.ethers.getContractFactory(
        "PlaneInteractor"
    )
    const planeInteractorInstance = await planeInteractor.deploy()
    await planeInteractorInstance.deployed()
    const planeInteractorInstanceAddress = planeInteractorInstance.address
    console.log(planeInteractorInstance)
    console.log("PlaneInteractor Address:", planeInteractorInstanceAddress)
    console.log("--------------------Deployed Successfully--------------------")
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
