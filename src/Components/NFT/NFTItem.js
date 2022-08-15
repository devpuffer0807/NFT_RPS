import React from "react"
import { useNavigate } from "react-router-dom"
import { FaMapMarkerAlt, FaArrowDown } from "react-icons/fa"
import SliderImg from "../../assets/image/nft/slider.png"

import { getOpenseaSdk } from "../../Opensea/sdk"
import { walletConnect } from "../../Util/wallet_connect"

import { useGlobalState } from "state-pool"
import { toast } from "react-toast"


const NFTItem = ({ index }) => {
    const navigate = useNavigate()
    const [openseaNFTSByCollection, ,] = useGlobalState('openseaNFTSByCollection')
    const [account, , ] = useGlobalState('account')
    const buyNFT = async () => {
        const walletInfo = await walletConnect()
        if(!walletInfo)
            return ;
        const _provider = walletInfo.provider
        const _account = walletInfo.account

        
        try{
            const openseaSDK = getOpenseaSdk(_provider)
            console.log("colloection info", _provider, openseaNFTSByCollection[index].asset_contract.address, openseaNFTSByCollection[index].token_id, _account)

            let order = null;

            try{
                order = await openseaSDK.api.getOrder({
                    assetContractAddress: openseaNFTSByCollection[index].asset_contract.address,
                    tokenId: openseaNFTSByCollection[index].token_id,
                    side: 'bid'
                })
            }catch(e){
                const offer = await openseaSDK.createBuyOrder({
                    asset: {
                      tokenId: openseaNFTSByCollection[index].token_id,
                      tokenAddress: openseaNFTSByCollection[index].asset_contract.address,
                      schemaName: "ERC721" // WyvernSchemaName. If omitted, defaults to 'ERC721'. Other options include 'ERC20' and 'ERC1155'
                    },
                    accountAddress: _account,
                    // Value of the offer, in units of the payment token (or wrapped ETH if none is specified):
                    startAmount: 0.01,
                  })
            }


            // const {orders, count } = await openseaSDK.api.getOrders({
            //     assetContractAddress: openseaNFTSByCollection[index].asset_contract.address,
            //     tokenId: openseaNFTSByCollection[index].token_id,
            //     side: 'bid'
            // })
            if(order === null){
                order = await openseaSDK.api.getOrder({
                    assetContractAddress: openseaNFTSByCollection[index].asset_contract.address,
                    tokenId: openseaNFTSByCollection[index].token_id,
                    side: 'bid'
                })
            }
            console.log("=====================", order)
            if(order.length === 0)
                return toast.error("There is not any order")
            const transactionHash = await openseaSDK.fulfillOrder({ order: order, accountAddress:  _account})
          }catch(e){
            console.log("##########", e)
          }
    }
    return (
        <div style={{width: 150, height: 330, backgroundColor: '#1A2C38', marginTop: 10, marginRight: 10, padding: 10, borderRadius: 5}}>
            <img alt="" src={openseaNFTSByCollection[index].image_url != null ? openseaNFTSByCollection[index].image_url : "https://testnets.opensea.io/static/images/placeholder.png"} style={{width: 150, height: 150, borderRadius: 5, cursor: 'pointer'}} onClick={ () => { 
                navigate("/nft_detail", { state: { index: index } })
             } } />
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 5}}>
                <span style={{color: '#fff', fontSize: 12}}>{ openseaNFTSByCollection[index].name }</span>
                <span style={{color: '#51636F', fontSize: 10}}>$12.5</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                <FaMapMarkerAlt color="#FFB800" size={14}/>
                <span style={{marginLeft: 10, color: '#fff', fontSize: 12}}>Droper:</span>
            </div>
            <div style={{paddingLeft: 100, color: '#00F2FF', fontSize: 8}}>$17.4</div>
            <div style={{paddingLeft: 110, color: '#00F2FF', marginTop: -5, marginBottom: -10}}><FaArrowDown color="#fff" size={7} /></div>
            <img alt="" src={SliderImg} style={{width: 150, height: 5}} />
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 10}}>
                <span style={{color: '#5D666C', fontSize: 10}}>$8.04</span>
                <span style={{color: '#5D666C', fontSize: 10}}>$12.04</span>
                <span style={{color: '#5D666C', fontSize: 10}}>$20.04</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                            height: 25, backgroundColor: '#00F2FF', borderRadius: 5,
                            marginTop: 10, cursor: 'pointer'}}
                onClick={buyNFT}
            >
                Buy
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 25, 
                            backgroundColor: account.toLowerCase() === openseaNFTSByCollection[index].owner.address.toLowerCase() ? '#FAFF00' : '#fff', borderRadius: 5, marginTop: 10, cursor: 'pointer'
            }}>
                Bet
            </div>
        </div>
    )
}

export default NFTItem;