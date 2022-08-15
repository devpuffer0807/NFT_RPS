import React from "react"
import { FaChevronUp, FaChartLine, FaChevronDown } from "react-icons/fa"

const PriceHistory = () => {
    return (
        <div style={{color: '#fff', fontSize: 12, width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <span><FaChartLine/> Price History</span>
                <span style={{cursor: 'pointer'}}>
                    <FaChevronUp />
                </span>
            </div>
            <div style={{width: '100%', marginTop: 10}}>
                <div style={{width: 70, height: 25, backgroundColor: '#314C5F', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', borderRadius: 5, fontSize: 10}}>
                    <FaChevronDown/>&nbsp;All time
                </div>
            </div>
            
        </div>
    )
}

export default PriceHistory