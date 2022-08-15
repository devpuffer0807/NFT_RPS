import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Block from "./Block"
import BinanceImg from "../../assets/image/home/binance.png"
import EthereumImg from "../../assets/image/home/ethereum-no-circle.png"
import LtcImg from "../../assets/image/home/ltc.png"
import SolanaImg from "../../assets/image/home/solana.png"
import RpsImg from "../../assets/image/home/rps.png"
import NftImg from "../../assets/image/home/nft.png"
import PayImg from "../../assets/image/home/pay.png"

const options = [{logo: BinanceImg, text: 'Bitcoin [BTC]'}, 
                    {logo: EthereumImg, text: "Ethereum [ETH]"},
                    {logo: LtcImg, text: "Litecoin [LTC]"},
                    {logo: SolanaImg, text: "Solana [SOL]"},
                    {logo: RpsImg, text: "RPS Shopper"},
                    {logo: NftImg, text: "NFT"},
                    {logo: PayImg, text: "Buy Crypto"},
                ]

const Deposit = () => {
    const [width, setWidth] = useState(0)
    const [index, setIndex] = useState(0)
  
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



    return (
        <div>
            <div style={{fontSize: 18, color: '#fff', marginTop: 20}}>Deposit Options</div>
            {
                width < 470 ?
                <div style={{width: '100%', justifyContent: 'space-between', display: 'flex', marginTop: 5}}>
                    <div onClick={() => { if(index > 0) setIndex(index - 1) }} style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faAngleLeft} color='#fff'/>
                    </div>
                    <div onClick={() => { if((index + 1) *3 < options.length) setIndex(index+1) }} style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faAngleRight} color='#fff'/>
                    </div>
                </div>
                : null
            }
            <div style={width < 470 ? {width: '100%', display: 'inline-flex', flexFlow: 'row wrap', justifyContent: 'space-around'} : {width: '100%', display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { 
                    width < 470 ? 
                        options.slice(index*3, (index+1)*3).map((item, i) => {
                            return <Block key={i} logo={item.logo} text={item.text}/>
                        })
                        : options.map((item, i) => {
                            return <Block key={i} logo={item.logo} text={item.text}/>
                        }) 
                }
            </div>
        </div>
    )
}

export default Deposit