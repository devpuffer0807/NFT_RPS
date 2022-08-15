import React from "react"

const ProgressBar = ({ value }) => {
    return(
        <div style={{width: '100%', backgroundColor: "#8C9398", borderRadius: 10, height: 15}}>
            <div style={{backgroundColor: "grey", width: value + "%", height: 15, borderRadius: 10}}/>
        </div>
    )
}

export default ProgressBar;