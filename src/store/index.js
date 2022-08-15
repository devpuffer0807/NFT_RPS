import { BINANCE } from "../Config/chainlist";

const Store = {
    loading: false,
    navExpand: false,
    sideBarActive: "card",
    openseaCollections: [],
    openseaNFTSByCollection: [],
    account: null,
    web3Provider: null,
    spsContract: null,
    network: BINANCE,
}

export default Store;