const { ethers } = require("ethers")

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL)
const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e"

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(
        `\nEth Balance of ${address} --> ${ethers.utils.formatEther(
            balance
        )} ETH`
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
