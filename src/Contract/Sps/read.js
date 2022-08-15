import Web3 from "web3";
import { toEther, getDate, getRPSStatusStr, getRPStatusImg } from "../../Util";
import UsdtAbi from "../../Abi/Usdt";
import { BINANCE, ETHEREUM } from "../../Config/chainlist";
import { BINANCE_SPS_ADDRESS, ETHEREUM_SPS_ADDRESS } from "../../Config/provider_url";

export const callBetInfoList = async (walletInfo, size) => {
    try {
        const res = await walletInfo.spsContract.methods.betInfoList(size).call({ from: walletInfo.account });
        return res;
    } catch (e) {
        return {};
    }

}

export const roomCounter = async (walletInfo) => {
    try {
        const res = await walletInfo.spsContract.methods.roomCounter().call({ from: walletInfo.account });
        return res;
    } catch (e) {
        return 0;
    }

}

export const callRoomList = async (walletInfo, roomId) => {
    try {
        const res = await walletInfo.spsContract.methods.roomList(roomId).call({ from: walletInfo.account });
        const keys = ["creator", "size", "createDate", "endDate", "winResult", "price", "token", "tokenAmount"]
        let _res = {}
        keys.map((item) => {
            _res[item] = res[item];
        })
        _res["price"] = toEther(_res["price"]);
        _res["tokenAmount"] = toEther(_res["tokenAmount"]);
        _res["createDate"] = getDate(_res["createDate"]);
        _res["endDate"] = getDate(_res["endDate"]);
        _res["winResult"] = getRPStatusImg(_res["winResult"]);
        _res["token"] = await getTokenName(walletInfo, _res["token"]);
        return _res;
    } catch (e) {
        return null;
    }
}

export const getTokenName = async (walletInfo, tokenAddress) => {
    if (walletInfo.network === BINANCE && tokenAddress === BINANCE_SPS_ADDRESS) {
        return "BNB";
    } else if (walletInfo.network === ETHEREUM && tokenAddress === ETHEREUM_SPS_ADDRESS) {
        return "ETHER";
    }
    const web3 = new Web3(walletInfo.provider);
    let tokenContract = new web3.eth.Contract(UsdtAbi, tokenAddress);
    let tokenName = "";
    try {
        tokenName = await tokenContract.methods.name().call();
    } catch (e) {
    }
    return tokenName;
}