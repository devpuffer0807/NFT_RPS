import React from "react"
import { walletConnect } from "../../Util/wallet_connect"
import { useGlobalState }  from "state-pool"

const Block = ({ logo, text, network }) => {

    const[, , updateWeb3Provider] = useGlobalState("web3Provider")
    const[, , updateAccount] = useGlobalState("account")

    const onClickBlock = async () => {
        const { provider, account } = await walletConnect(network)
        console.log("$$$$$$$$$$$$", provider)
        updateWeb3Provider(() => { return provider })
        updateAccount(() => { return account })
    }
    return(
        <div style={{width: 160, height: 120, backgroundColor: '#1A2C38', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20, marginTop: 20}}>
            <img src={logo} alt="" style={{width: 60, height: 60, cursor: 'pointer'}} onClick={async () => { onClickBlock() }} />
            <div style={{color: '#fff', marginTop: 5}}>{text}</div>
        </div>
    )
}

export default Block