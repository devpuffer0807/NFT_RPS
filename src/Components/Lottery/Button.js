import React from "react";


const Button = ({ text, icon, color, callback }) => {
    return(
        <div style={{backgroundColor: '#1A2C38', width: '100%', height: 30, display: 'flex', alignItems: 'center', borderRadius: 5, cursor: 'pointer', marginTop: 20, paddingLeft: 15}} onClick={() => { callback() }}>
            {icon}
            <span style={{color: color, fontSize: 13}}>&nbsp;{text}</span>
        </div>
    )
}

export default Button