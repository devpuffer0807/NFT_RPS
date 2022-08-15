import React, { useEffect, useState } from "react"
import Input from "./Input"

import CoinImg from  "../../assets/image/header/coin.png"

const Referal = () => {
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
        <div style={{padding: width > 660 ? 40 : 5, display: 'flex', flexDirection: width > 660 ? 'row' : 'column'}}>
            <div style={{width: 200, height: '100%', marginTop: 30}}>
                <img src={CoinImg} alt="" style={{width: 180, height: 180}} />
            </div>
            <div style={{width: width > 660 ? 450 : '100%', paddingLeft: width > 660 ? 80 : 0}}>
                <h4 style={{color: '#fff'}}>Apply Referal Code</h4>
                <Input holderText={"Enter Referal Code..."} />
                <div style={{fontSize: 14, color: '#636F77', marginTop: 20}}>
                    Don't have a code? Enter "Rollbit"
                </div>
                <div style={{ marginTop: 20, fontSize: 14, fontWeight: 'bold', width: 100, height: 35, cursor: 'pointer', backgroundColor: '#00F2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                    Apply
                </div>
            </div>
        </div>
    )
}

export default Referal;