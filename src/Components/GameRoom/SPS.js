import React from "react"

const SPS = ({children}) => {
    return(
        <div style={{width: 60, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 50, height: 50, borderRadius: 4, backgroundColor: '#29495F', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                { children }
            </div>
        </div>
    )
}

export default SPS