import { OpenSeaSDK, Network } from 'opensea-js'
import { API_KEY } from "../Config/opensea"
import { PRODUCTION } from "../Config"

export const getOpenseaSdk = (provider) => {
  const openseaSDK = new OpenSeaSDK(provider, {
    networkName: PRODUCTION ? Network.Main : Network.Rinkeby,
    apiKey: API_KEY
  })
  return openseaSDK;
}