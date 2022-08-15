import { PRODUCTION, } from "./index"

export const API_KEY = PRODUCTION ? "" : ""
export const OPENSEA_API_URL = PRODUCTION ? `https://api.opensea.io/api/v1/` : `https://testnets-api.opensea.io/api/v1/`