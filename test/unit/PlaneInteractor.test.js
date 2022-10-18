const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

let planeRegistryInstance
let planeRegistryAddress

// creating instance of PlaneRegistry
factoryContractInstance = async () => {
    const planeRegistryFactory = await ethers.getContractFactory(
        "PlaneRegistry"
    )
    planeRegistryInstance = await planeRegistryFactory.deploy()
    await planeRegistryInstance.deployed()

    planeRegistryAddress = planeRegistryInstance.address
    console.log("PlaneRegistry  Address:", planeRegistryAddress)
}

describe("PlaneInteractor", () => {
    let planeInteractorInstance
    let planeInteractorAddress
    
    // calling PlaneRegistry contract
    factoryContractInstance()

    beforeEach(async () => {
        const planeInteractor = await ethers.getContractFactory(
            "PlaneInteractor"
        )
        planeInteractorInstance = await planeInteractor.deploy()
        await planeInteractorInstance.deployed()

        planeInteractorAddress = planeInteractorInstance.address
        console.log("Plane Interactor Address:", planeInteractorAddress)
    })

    it("Should take two inputs and add it to an Array", async () => {
        const _contract = planeRegistryAddress
        const _make = "Air India"

        await planeInteractorInstance.calladdPlanes(_contract, _make)
    })

    it("Should take two inputs and remove from an Array", async () => {
        const _contract = planeRegistryAddress
        const _index = 0

        await planeInteractorInstance.calladdPlanes(_contract, _index)
        console.log("succesfuly removed a plan")
    })
})
