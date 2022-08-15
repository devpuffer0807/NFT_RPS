import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import { FaGamepad, FaQuestion, FaArrowsAltH } from "react-icons/fa"
import GameRow from "../Components/GameRoom/GameRow"
import SPS from "../Components/GameRoom/SPS"
import Vs from "../Components/GameRoom/Vs"
import GameAvatar from "../Components/GameRoom/GameAvatar"
import FunctionContainer from "../Components/GameRoom/FunctionContainer"
import SPSChoice from "../Components/GameRoom/SPSChoice"

import "../assets/css/GameRoom.css"
import QuestionImg from "../assets/image/game_room/question.png"
import StoneImg from "../assets/image/game_room/stone.png"
import PaperImg from "../assets/image/game_room/paper.png"
import ScissorsImg from "../assets/image/game_room/scissors.png"

import Footer from "../Components/Footer"

const GameRoom = () => {
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
            <h1 className="game-room-title"><FaGamepad/>&nbsp;Game Room</h1>
            <div className="game-room-container">
                <GameRow>
                    <GameAvatar/>
                    <Vs>
                        0 : 0
                    </Vs>
                    <GameAvatar/>
                </GameRow>
                <GameRow>
                    <SPS>
                        <SPSChoice img={ QuestionImg }/>
                    </SPS>
                    <Vs>
                        <FaArrowsAltH size={25}/>
                    </Vs>
                    <SPS>
                        <SPSChoice img={ QuestionImg }/>
                    </SPS>
                </GameRow>
                <FunctionContainer>
                    <SPS>
                        <SPSChoice img={ StoneImg }/>
                    </SPS>
                    <SPS>
                        <SPSChoice img={ PaperImg }/>
                    </SPS>
                    <SPS>
                        <SPSChoice img={ ScissorsImg }/>
                    </SPS>
                </FunctionContainer>
            </div>
            <Footer/>
        </div>
    )
}

export default GameRoom;