const Web3 = require("web3")
const Accounts = require("web3-eth-accounts")
const accounts = new Accounts("ws://localhost:3000")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"))

exports.get_new_address =async (req, res)=>{
     console.log("ETH GET NEW ADDRESS")
     let ethData = {}
     try{
         ethdata = await web3.eth.accounts.create()
         console.table(ethData)
         ethData.result = ethData.address;
         return ethData.result
     } catch(err) {
        ethData.result = err.message
        console.log("request error in get_new_address")
        return ethData.result
     }
     console.log(ethData.result)
     return ethData.result
}