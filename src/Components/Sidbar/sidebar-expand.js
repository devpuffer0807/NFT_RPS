import React from "react";
import { useNavigate } from "react-router-dom"
import { useGlobalState } from "state-pool"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import "../../assets/css/Sidebar.css";
import CardImg from "../../assets/image/sidebar/card.png"
import NFTImg from "../../assets/image/sidebar/nft.png"
import LotteryImg from "../../assets/image/sidebar/lottery.png"
import ShopImg from "../../assets/image/sidebar/shop.png"
import CardImgY from "../../assets/image/sidebar/card-y.png"
import NFTImgY from "../../assets/image/sidebar/nft-y.png"
import LotteryImgY from "../../assets/image/sidebar/lottery-y.png"
import ShopImgY from "../../assets/image/sidebar/shop-y.png"

import { FaGamepad, FaPlusCircle } from "react-icons/fa";

const SidbarExpand = () => {
    const navigate = useNavigate()
    const [sideBarActive, , updateSideBarActive] = useGlobalState('sideBarActive')

    const setSideBarIcon = (active) => {
        updateSideBarActive((old) => {
            return active;
        })
    }

    return (
        <div className="expand-sidebar-container">
            <div className="item" onClick={()=> { setSideBarIcon("/"); navigate('/'); }} >
                <img src={sideBarActive === "/" ? CardImgY : CardImg} alt="" />
                <h5>Casino</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div>
            <div className="item"  onClick={()=> { setSideBarIcon("/game"); navigate('/game') }}>
                <FaGamepad color={ sideBarActive === "/game" ? "#ffd800" : "#505457" } size="30" style={{width: 40, height: 40, cursor: 'pointer'}} onClick={() => { setSideBarIcon("/game"); navigate("/game") }}/>
                <h5>Game</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div>
            <div className="item"  onClick={()=> { setSideBarIcon("/game_room"); navigate('/game_room'); }}>
                <FaPlusCircle color={ sideBarActive === "/game_room" ? "#ffd800" : "#505457" } size="25" style={{width: 35, height: 35, cursor: 'pointer'}} onClick={() => { setSideBarIcon("/game"); navigate("/game") }}/>
                <h5>Game Room</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div>
            <div className="item"  onClick={()=> { setSideBarIcon("/nft"); navigate('/nft') }}>
                <img src={sideBarActive === "/nft" ? NFTImgY : NFTImg} alt="" />
                <h5>NFTs</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div>
            {/* <div className="item" onClick={()=> { setSideBarIcon("/lottery"); navigate('/lottery') }}>
                <img src={sideBarActive === "/lottery" ? LotteryImgY : LotteryImg} alt="" />
                <h5>Lottery</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div> */}
            {/* <div className="item" onClick={()=> { setSideBarIcon("/shop") }} >
                <img src={sideBarActive === "/shop" ? ShopImgY : ShopImg} alt="" />
                <h5>Buy Crypto</h5>
                <FontAwesomeIcon icon={faCaretDown} color="#fff" />
            </div> */}
        </div>
    )   
}

export default SidbarExpand;