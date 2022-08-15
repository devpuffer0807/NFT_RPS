import React from "react"
import UpImg from "../../assets/image/home/up.png"
import DownImg from "../../assets/image/home/down.png"

const Card = ({ percent, title, detail, amount, logoImg }) => {
    return(
        <div style={{width: 300, height: 130, backgroundColor: "#0F212E", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 25, marginRight: 25}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: -20, marginBottom: 10}}>
                <div style={{fontSize: 9, backgroundColor: percent > 0 ? '#1B6432' : '#4F1818', color: percent > 0 ? '#00FF0A' : '#FF0000', width: 70, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                    { percent > 0 ? ("+" + percent) : (percent) }%
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <img src={logoImg} alt="" style={{width: 70, height: 70, marginRight: 20}} />
                <div style={{color: '#fff'}}>
                    <div style={{fontSize: 18}}>{title}</div>
                    <div style={{fontSize: 12, marginTop: 5}}>{detail}</div>
                    <div style={{fontSize: 14, color: percent > 0 ? '#00FF0ACC' : '#FF0000', marginTop: 10}}><img src={percent > 0 ? UpImg : DownImg} alt="" style={{width: 10, height: 13, marginRight: 5}}/>{amount}</div>
                </div>
            </div>
        </div>
    )
}

export default Card