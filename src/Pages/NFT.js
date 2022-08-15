import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import { FaStore } from "react-icons/fa"
import SearchInput from "../Components/NFT/SearchInput"
import DropDown from "../Components/NFT/DropDown"
import NFTItem from "../Components/NFT/NFTItem"
import Footer from "../Components/Footer"

import { getNFTAssetsBySlug, } from "../Api/opensea"

import { walletConnect } from "../Util/wallet_connect"

const NFT = () => {
    const [navExpand] = useGlobalState('navExpand')
    const [width, setWidth] = useState(0)
    const [active, setActive] = useState(0)
    const [openseaCollections, , ] = useGlobalState('openseaCollections')
    const [openseaNFTSByCollection, ,updateOpenseaNFTSByCollection] = useGlobalState('openseaNFTSByCollection')
    const [loading, , updateLoading] = useGlobalState('loading')
    const [, , updateAccount] = useGlobalState('account')

    useEffect(() => {

        const init = async () => {
            if(loading)
                return ;
            updateLoading(() => {
                return true;
            })
            const walletInfo = await walletConnect()
            updateAccount(() => { return walletInfo.account; })
            const res = await getNFTAssetsBySlug("All")
            console.log("=========nft ", res)
            updateOpenseaNFTSByCollection(() => { return res; })
            updateLoading(() => { return false; })
        }

        init()
    }, [])
  
    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
        window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    const menuItemCss = {color: '#3B4F5C'}
    const menuItemActiveCss = {color: '#00F2FF', backgroundColor: '#1A2C38'}

    return(
        <div className="nft-container" style={{ marginLeft: width > 835 ? (navExpand ? 200 : 100) : 0  }}>
            <div className="nft-sub-title">
                <FaStore color="#fff" size={26}/>
                <h1>NFT</h1>
            </div>
            <div className="nft-sub-menu">
                 <div style={active === 0 ? menuItemActiveCss : menuItemCss} onClick={() => { setActive(0) }}>Portfolio</div>
                 <div style={active === 1 ? menuItemActiveCss : menuItemCss} onClick={() => { setActive(1) }}>Loans</div>
                 <div style={active === 2 ? menuItemActiveCss : menuItemCss} onClick={() => { setActive(2) }}>External</div>
            </div>
            <div className="nft-function-container">
                <SearchInput />
                <DropDown style={{marginLeft: 40}} title="Collection" filter="All" data = {openseaCollections} />
                <DropDown style={{marginLeft: 40}} title="Sort by" filter="Highest" />
            </div> 
            <div className="nft-content-container">
                {
                    openseaNFTSByCollection.map((item, index) => {
                        return(
                            <NFTItem key={index} index={index}/>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default NFT;