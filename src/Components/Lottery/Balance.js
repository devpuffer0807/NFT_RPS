import React from "react"
import { FaExchangeAlt } from "react-icons/fa"
import CoinImg from "../../assets/image/header/coin.png"

const Balance = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <h2 style={{color: '#fff'}}>Balance</h2>
                <span style={{backgroundColor: '#31404B', height: 20, color: '#BEC0C1', fontSize: 14, paddingLeft: 10, paddingRight: 10, display: 'flex', alignItems: 'center', borderRadius: 5}}>Create Referal Balance</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <span style={{color: '#515558', fontSize: 11, display: 'flex', alignItems: 'center'}} ><FaExchangeAlt />&nbsp;&nbsp;Switch Balance</span>
                <span style={{color: '#515558', fontSize: 12}}>Total:&nbsp; <span style={{color: '#fff'}}>$0.00</span></span>
            </div>
            <div style={{width: '100%', backgroundColor: '#163042', height: 50, marginTop: 20, borderRadius: 5, display: 'flex', alignItems: 'center', paddingLeft: 20}}>
                <div style={{width: 6, height: 6, borderRadius: 6, borderWidth: 2, borderColor: '#FAFF00', borderStyle: 'solid'}} />
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                    <span style={{color: '#515558', fontSize: 10}}>Main</span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={CoinImg} style={{width: 10, height: 10, marginRight: 5}} alt =""/>
                        <span style={{color: '#fff', fontSize: 10, marginTop: 3}}>$0.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance