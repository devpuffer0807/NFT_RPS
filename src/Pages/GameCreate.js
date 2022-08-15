import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"

import "../assets/css/GameCreate.css"

import Card from "../Components/GameCreate/Card";
import Footer from "../Components/Footer"

import RPSImg from "../assets/image/game_create/rps.png";

const GameCreate = () => {
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
            <div className="game-create-container">
                <Card player_num={2} />
                <Card player_num={4} />
            </div>
            <Footer/>
        </div>
    )
}

export default GameCreate;