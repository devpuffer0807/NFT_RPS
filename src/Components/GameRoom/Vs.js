import React from "react"

const Vs = ({ children }) => {
    return (
        <div style={{width: 70, height: 70, display: 'flex', justifyContent: 'center',  alignItems: 'center', color: '#fff'}}>
            { children }
        </div>
    )
}

export default Vs