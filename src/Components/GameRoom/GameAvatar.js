import React from "react"
import MAvatar from "../../assets/image/game_room/m_avatar.png"

const GameAvatar = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', color:'#fff', justifyContent: 'center', alignItems: 'center'}}>
            <img src={MAvatar} style={{width: 60, height: 60, borderRadius: 60}}/>
            <span style={{fontSize: 11, marginTop: 5}}>Miyang</span>
        </div>
    )
}


export default GameAvatar