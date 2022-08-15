import React, { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import { getNFTAssetsBySlug } from "../../Api/opensea"
import { useGlobalState } from "state-pool"

const DropDown = ( { style, title, filter, data }) => {
    const [, , updateOpenseaNFTSByCollection] = useGlobalState('openseaNFTSByCollection')
    const [, , updateLoading] = useGlobalState('loading')
    const [drawText, setDrawText] = useState(filter)
    const [drop, setDrop] = useState(false)
    return(
            <div style={{...{display:'flex', textAlign: 'center', alignItems: 'center', backgroundColor: '#1A2C38', paddingLeft: 10, paddingRight: 10, borderRadius: 3, cursor: 'pointer', position: 'relative', width: 150, justifyContent: 'space-between'}, ...style}}>
                <span style={{color: '#fff', fontSize: 12}}>{title}:</span>
                <div onClick={() => { setDrop(!drop); }}>
                    <span style={{color: '#00F2FF', fontSize: 12, marginLeft: 5, marginRight: 5}}>{drawText}</span>
                    <FaChevronDown color="#fff" size={9}/>
                </div>
                <div style={{position: 'absolute', top: 40, left: 0}}>
                    {
                        Array.isArray(data) && drop
                        ? data.map((item, index) => {
                            return(
                                <div style={{backgroundColor: '#163042', width: 160, height: 20, padding: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: 11, color: '#fff', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: '#0f212e', borderRadius: 4}} key={index}
                                    onClick={async () => {
                                        updateLoading(()=>{ return true })
                                        setDrawText(item.name.substr(0, 3) + "..." + item.name.substr(item.name.length - 2, item.name.length))
                                        setDrop(false)
                                        const nfts = await getNFTAssetsBySlug(item.slug);
                                        updateOpenseaNFTSByCollection(() => {
                                            return nfts;
                                        })
                                        updateLoading(()=>{ return false })
                                    }}
                                >{item.name}</div>
                            )
                        })
                        : null
                    }
                </div>
            </div>
    )
}

export default DropDown