import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"

import ButtonList from "../Components/Lottery/ButtonList"

import Balance from "../Components/Lottery/Balance"

import Footer from "../Components/Footer"

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
            <div className="lottery-container">
                <div className="function-button-list">
                    <ButtonList/>
                </div>
                <div className="lottery-content-container">
                    <Balance />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;