import { toast } from "react-toast"
import Web3 from "web3"
import { ETHEREUM_URL, ETHEREUM_ID, BINANCE_ID, BINANCE_URL } from "../Config/provider_url"
import { ETHEREUM, BINANCE } from "../Config/chainlist"
import SPSABI from "../Abi/SPS"
import { BINANCE_SPS_ADDRESS } from "../Config/provider_url";

export const walletConnect = async (network) => {
    let web3Provider;
    if (window.ethereum) {
      web3Provider = window.ethereum;
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log("User denied account access");
        toast.warn("User denied account access")
        return false;
      }
    } else if (window.web3) {
      web3Provider = window.web3.currentProvider;
    } else {
      
      web3Provider = new Web3.providers.HttpProvider(network === ETHEREUM ? ETHEREUM_URL : BINANCE_URL);
    }    
    const web3 = new Web3(web3Provider);

    try {      
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network === ETHEREUM ? ETHEREUM_ID : BINANCE_ID }],
      });
    } catch (switchError) {
        
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{ chainId: network === ETHEREUM ? ETHEREUM_ID : BINANCE_ID, rpcUrl: network === ETHEREUM ? ETHEREUM_URL : BINANCE_URL /* ... */ }],
          });
        } catch (addError) {
          return toast.error("Network add error")
          // handle "add" error
        }
      }
      toast.error("Switch network error")
      return false;
      // handle other "switch" errors
    }

    //web3.setProvider(BINANCE_MAIN); // main_net:56
    //let netId = await web3.eth.net.getId();
    let account;
    let is_connected = false;    
    [account] = await web3.eth.getAccounts(function (error, accounts) {
      if (error) {
      }
      is_connected = true;
    });

    let spsContract = new web3.eth.Contract(SPSABI, BINANCE_SPS_ADDRESS);

    
    return {provider: web3Provider, account: account, spsContract: spsContract, network: network};
    

}