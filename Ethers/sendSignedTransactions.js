const { ethers } = require("ethers")

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL)

const account1 = "0x1d38649F181889BF189926862784b89dFb5414F3" // sender
const account2 = "0x519cc830171e6237fab773D6C5039b35F785d232" // recipient

const PRIVATE_KEY = process.env.PRIVATE_KEY

const wallet = new ethers.Wallet(PRIVATE_KEY, provider)

const main = async () => {
    const balanceOfAccount1 = await provider.getBalance(account1)
    const balanceOfAccount2 = await provider.getBalance(account2)

    console.log(
        `\nSender Balance before Tx: ${ethers.utils.formatEther(
            balanceOfAccount1
        )}`
    )
    console.log(
        `\Recipint Balance before Tx: ${ethers.utils.formatEther(
            balanceOfAccount2
        )}\n`
    )

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.00123456")
    })

    const txReceipt = await tx.wait()
    console.log(tx)

    console.log("\n=================================================\n\n")
    

    const balanceOfAccount1After = await provider.getBalance(account1)
    const balanceOfAccount2After = await provider.getBalance(account2)

    console.log(
        `\nSender Balance After Tx: ${ethers.utils.formatEther(
            balanceOfAccount1After
        )}`
    )
    console.log(
        `\Recipint Balance After Tx: ${ethers.utils.formatEther(
            balanceOfAccount2After
        )}\n`
    )
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
