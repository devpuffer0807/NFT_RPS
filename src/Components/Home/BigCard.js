import React from "react"

const BigCard = ({ title, logo, darkMode }) => {
    return(
        <div style={{width: 330, height: darkMode ? 470 : 450, marginTop: 50, marginBlock: 50, backgroundColor: darkMode ? "#1B222C" : "#1A2C38", marginLeft: 40, marginRight: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: 5}}>
            <h4 style={{color: '#fff'}}>{ title }</h4>
            <img src={logo} alt="" style={{width: 200, height: 200}} />
            <div style={{color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', margin: 20,}}>The exhilarating casino experience. From exclusive house game </div>
            {
                darkMode ?
                    <div style={{backgroundColor: '#00F2FF', cursor: "pointer", width: 240, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1E1E1E', borderWidth: 2, borderStyle: 'solid', borderColor: '#00F2FF', borderRadius: 5, fontWeight: 'bold'}}>
                        Go To { title }
                    </div>
                    : 
                    <div style={{cursor: "pointer", width: 240, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#126976', borderWidth: 2, borderStyle: 'solid', borderColor: '#126976', borderRadius: 5}}>
                        Go To { title }
                    </div>
            }
        </div>
    )
}

export default BigCard