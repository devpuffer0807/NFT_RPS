import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import ProgressBar from "../Components/Home/progress"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Card from "../Components/Home/card"
import BigCard from "../Components/Home/BigCard"
import HomeImg from "../assets/image/home/home.jpg"
import HomeResImg from "../assets/image/home/home-response.jpg"
import HomeRes1Img from "../assets/image/home/home-response-1.jpg"
import BinanceImg from "../assets/image/home/binance.png"
import EthereumImg from "../assets/image/home/ethereum.png"
import SolanaImg from "../assets/image/home/solana.png"
import DogImg from "../assets/image/home/dog.png"
import CasinoImg from "../assets/image/home/casino.png"
import SportImg from "../assets/image/home/sport.png"
import NftImg from "../assets/image/home/nft.png"

const Home = () => {
    const [navExpand] = useGlobalState('navExpand')

    const [width, setWidth] = useState(0)
  
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

    return(
        <div className="container" style={{ marginLeft: width > 835 ? (navExpand ? 200 : 100) : 0  }}>
            <div className="img-slider" style={{backgroundImage:  width > 1100 ? `url(${HomeImg})` : (width > 1100 ? `url(${HomeResImg})` : `url(${HomeRes1Img})`), backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <h1 style={{color: "#fff"}}>EARN UP TO <span style={{color: '#E3A365'}}>85%</span> IN <br/> REWARDS & LOSSBACKS</h1>
                <div className="home-rank-container">
                    <div className="home-rank-item">
                        <h5>Rakeback: &nbsp;&nbsp;<span style={{color: "#09BB66"}}>15%</span></h5>
                    </div>
                    <div className="home-rank-item">
                        <h5>Rollback: &nbsp;&nbsp;<span style={{color: "#00F2FF"}}>0%</span></h5>
                    </div>
                </div>
                <div className="home-progress-container">
                    <div className="row">
                        <h3>Your progress</h3>
                        <h4><span style={{color: "#A4AC0F"}}>0.00%</span></h4>
                    </div>
                    <div className="row">
                        <ProgressBar value={0} />                    
                    </div>
                    <div className="row" style={{marginTop: 20}}>
                        <div style={{color: "#D9D9D9"}}>
                            <FontAwesomeIcon icon={faStar} color="#D9D9D9" />
                            <span>&nbsp;None</span>
                        </div>
                        <div style={{color: "#CD7F32"}}>
                            <FontAwesomeIcon icon={faStar} color="#CD7F32" />
                            <span>&nbsp;Bronze</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-card-container">
                <Card percent={1.97} title={"Bitcoin"} detail={"24h Volume: 135M"} amount={56.2578} logoImg={BinanceImg} />
                <Card percent={-2.97} title={"Ethranium"} detail={"24h Volume: 135M"} amount={56.2578} logoImg={EthereumImg} />
                <Card percent={4.5} title={"Solana"} detail={"24h Volume: 135M"} amount={56.2578} logoImg={SolanaImg} />
                <Card percent={-3.4} title={"Dogecoin"} detail={"24h Volume: 135M"} amount={56.2578} logoImg={DogImg} />
            </div>
            <div className="home-big-card-container">
                <BigCard title="Casino" logo={CasinoImg} />
                <BigCard title="SPORTSBOOK" logo={SportImg} darkMode={true} />
                <BigCard title="NFTs" logo={NftImg} />
            </div>
        </div>
    )
}

export default Home;