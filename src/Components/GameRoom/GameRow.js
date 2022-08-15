import React from "react"

const GameRow = ({ children }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', display: 'flex', marginTop: 10}}>
            { children }
        </div>
    )
}

export default GameRow;