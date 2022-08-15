import React from "react";
import { useGlobalState } from "state-pool"
import { useNavigate } from "react-router-dom"
import { FaGamepad, FaPlusCircle } from "react-icons/fa"

import "../../assets/css/Sidebar.css";
import CardImg from "../../assets/image/sidebar/card.png"
import NFTImg from "../../assets/image/sidebar/nft.png"
import LotteryImg from "../../assets/image/sidebar/lottery.png"
import ShopImg from "../../assets/image/sidebar/shop.png"
import CardImgY from "../../assets/image/sidebar/card-y.png"
import NFTImgY from "../../assets/image/sidebar/nft-y.png"
import LotteryImgY from "../../assets/image/sidebar/lottery-y.png"
import ShopImgY from "../../assets/image/sidebar/shop-y.png"

const Sidbar = () => {
    const navigate = useNavigate()
    const [sideBarActive, , updateSideBarActive] = useGlobalState('sideBarActive')

    const setSideBarIcon = (active) => {
        updateSideBarActive((old) => {
            return active;
        })
    }

    return (
        <div className="sidebar-container">
            <img src={sideBarActive === "/" ? CardImgY : CardImg} alt="" onClick={()=> { setSideBarIcon("/"); navigate('/'); }} />
            {/* <FaGamepad color={ sideBarActive === "/game_room" ? "#ffd800" : "#505457" } size="30" style={{width: 40, height: 40, paddingTop: 40, cursor: 'pointer'}} onClick={() => { setSideBarIcon("/game_room"); navigate("/game_room") }}/> */}
            <FaGamepad color={ sideBarActive === "/game" ? "#ffd800" : "#505457" } size="30" style={{width: 40, height: 40, paddingTop: 40, cursor: 'pointer'}} onClick={() => { setSideBarIcon("/game"); navigate("/game") }}/>
            <FaPlusCircle color={ sideBarActive === "/game_create" ? "#ffd800" : "#505457" } size="30" style={{width: 35, height: 35, paddingTop: 40, cursor: 'pointer'}} onClick={() => { setSideBarIcon("/game_create"); navigate("/game_create"); }}/>
            <img src={sideBarActive === "/nft" ? NFTImgY : NFTImg} alt="" onClick={()=> { setSideBarIcon("/nft"); navigate('/nft') }} />
            {/* <img src={sideBarActive === "/lottery" ? LotteryImgY : LotteryImg} alt="" onClick={()=> { setSideBarIcon("/lottery"); navigate('/lottery') }} />
            <img src={sideBarActive === "/shop" ? ShopImgY : ShopImg} alt="" onClick={()=> { setSideBarIcon("/shop") }} /> */}
        </div>
    )   
}

export default Sidbar;