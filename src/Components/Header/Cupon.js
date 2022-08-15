import React, { useState, useEffect } from "react"
import Input from "./Input"

import CoinImg from  "../../assets/image/header/coin.png"

const Cupon = () => {
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
            <div style={{width: width > 660 ? 450 : "100%"}}>
                <h4 style={{color: '#fff'}}>Redeem Coupon Code</h4>
                <Input holderText={"Enter Coupon Code..."} />
                <div style={{fontSize: 14, color: '#fff', marginTop: 20}}>
                    We regularly post these on our 
                    <span style={{color: '#FAFF00', cursor: 'pointer', marginLeft: 10}}>Twitter</span>
                </div>
                <div style={{ marginTop: 20, fontSize: 14, fontWeight: 'bold', width: 100, height: 35, cursor: 'pointer', backgroundColor: '#00F2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                    Claim
                </div>
            </div>
            <div style={{width: 200, height: '100%', marginTop: 30}}>
                <img src={CoinImg} alt="" style={{width: 180, height: 180}} />
            </div>
        </div>
    )
}

export default Cupon;