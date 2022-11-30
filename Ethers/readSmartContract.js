const { ethers } = require("ethers")
const abi = require("./dai.json")

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(MAINNET_RPC_URL)

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F" //Dai Address
const contract = new ethers.Contract(address, abi, provider)

const main = async () => {
    const name = await contract.name()
    const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address} \n`)
    console.log(`name: ${name}`)
    console.log(`totalSupply ${totalSupply}`)

    const balanceOf = await contract.balanceOf(address)

    console.log(
        `balanceOf ${address} --> ${ethers.utils.formatEther(balanceOf)} DAI`
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
