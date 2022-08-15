import React, { useState } from "react";
import Button from "./Button";
import { FaUser, FaDatabase, FaGift, FaNetworkWired, FaPiggyBank, FaExchangeAlt, FaCog, FaSignOutAlt } from "react-icons/fa"

const ButtonList = () => {

    const [active, setActive] = useState(0)

    return (
        <div>
            <Button icon={<FaUser color={active === 0 ? '#FAFF00' : "#515558"} size={13} />} text="Casino" color={active === 0 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(0) }} />
            <Button icon={<FaDatabase color={active === 1 ? '#FAFF00' : "#515558"} size={13} />} text="Balance" color={active === 1 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(1) }} />
            <Button icon={<FaGift color={active === 2 ? '#FAFF00' : "#515558"} size={13} />} text="Rewards" color={active === 2 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(2) }} />
            <Button icon={<FaNetworkWired color={active === 3 ? '#FAFF00' : "#515558"} size={13} />} text="Referral" color={active === 3 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(3) }} />
            <Button icon={<FaPiggyBank color={active === 4 ? '#FAFF00' : "#515558"} size={13} />} text="Deposits" color={active === 4 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(4) }} />
            <Button icon={<FaExchangeAlt color={active === 5 ? '#FAFF00' : "#515558"} size={13} />} text="Withdrawals" color={active === 5 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(5) }} />
            <Button icon={<FaCog color={active === 6 ? '#FAFF00' : "#515558"} size={13} />} text="Settings" color={active === 6 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(6) }} />
            <Button icon={<FaSignOutAlt color={active === 7 ? '#FAFF00' : "#515558"} size={13} />} text="Log Out" color={active === 7 ? '#FAFF00' : "#515558"} callback={()=>{ setActive(7) }} />
        </div>
    )
}

export default ButtonList