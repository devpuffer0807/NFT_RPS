import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import { FaChevronLeft, FaEye, FaHeart, FaWallet, FaTags } from "react-icons/fa"
import { useLocation, useNavigate, } from "react-router-dom"

import Footer from "../Components/Footer"
import PriceHistory from "../Components/NFTDetail/PriceHistory"


const NFTDetail = () => {
    const [navExpand] = useGlobalState('navExpand')
    const { state } = useLocation()
    const [openseaNFTSByCollection, ,] = useGlobalState('openseaNFTSByCollection')
    const [width, setWidth] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        if(openseaNFTSByCollection.length === 0){
            return navigate("/nft")
        }
        console.log("------------", openseaNFTSByCollection[state.index])
        async function handleResize() {
            setWidth(window.innerWidth)

        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return(
        <div className="nft-detail-container" style={{ marginLeft: width > 835 ? (navExpand ? 200 : 100) : 0, padding: 20 }}>
            <div className="nft-detail-header">
                <div className="back" onClick={() => { navigate("/nft") }}>
                    <FaChevronLeft /> Back
                </div>
            </div>
            <div className="nft-detail-image-info-container">
                <img src={openseaNFTSByCollection[state.index]?.image_url != null ? openseaNFTSByCollection[state.index].image_url : "https://testnets.opensea.io/static/images/placeholder.png"} alt="" />
                <div className="detail-container">
                    <div className="title">{openseaNFTSByCollection[state.index]?.name}·$56.3</div>
                    <div className="name">{openseaNFTSByCollection[state.index]?.collection.name }-{openseaNFTSByCollection[state.index]?.token_id}</div>
                    <div className="detail-info-container">
                        <div>Owned By: <span style={{color: '#FFB800'}}>{openseaNFTSByCollection[state.index]?.creator?.user?.username}</span></div>
                        <div><FaEye/>&nbsp;&nbsp;0 Views</div>
                        <div><FaHeart/>&nbsp;&nbsp;0 Favorite</div>
                    </div>
                    <div className="price-container">
                        {
                            Array.isArray(openseaNFTSByCollection[state.index]?.seaport_sell_orders) && openseaNFTSByCollection[state.index]?.seaport_sell_orders.length > 0
                            ? <div className="price">{ openseaNFTSByCollection[state.index]?.seaport_sell_orders[0]?.current_price } WEI</div>
                            : <div className="price">{ 0 } ETH</div>
                        }
                        <div className="value">($ 0)</div>
                        <div className="price-function-container">
                            <div className="buy"><FaWallet/>&nbsp;Buy Now</div>
                            <div className="offer"><FaTags/>&nbsp;Make Offer</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nft-detail-info-container">
                <div className="row">
                  <PriceHistory />  
                </div>
            </div>
            <Footer />
        </div>
    ) 
}

export default NFTDetail;