import React from "react"

const FunctionContainer = ({ children }) => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <div style={{ width: 250, display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                { children }
            </div>
        </div>
    )
}

export default FunctionContainer