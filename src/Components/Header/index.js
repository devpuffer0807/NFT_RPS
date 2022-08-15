import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserAlt, faCommentAlt, faClose } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-modal"

import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import WalletConnect from "./WalletConnect"
import Cupon from "./Cupon"
import Referal from "./Referal"
import Profile from "./Profile"

import '../../assets/css/Header.css';
import Logo from "../../assets/image/header/logo.png"
import NavOpenned from "../../assets/image/header/nav-open.png";
import NavClosed from "../../assets/image/header/nav-close.png";

import dotString from "../../Util/dotstring"

const Header = () => {
    const [navExpand, , updateNavExpand] = useGlobalState('navExpand')
    const[account, , updateAccount] = useGlobalState("account")

    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [cateActive, setCateActive] = React.useState("Deposit")

    const [width, setWidth] = useState(0)
  
    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
        window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: width > 700 ? 'translate(-50%, -50%)' : 'translate(-50%, -40vh)',
          backgroundColor: '#0F212E',
          borderRadius: 5,
          borderWidth: 0,
          width: width > 890 ? 725 : (width > 660 ? 540 : (width > 470 ? 360: "72%")),
          height: width > 890 ? 380 : '',
          padding: 30,
        },
      }

    return (
        <div className="header">
            
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onAfterOpen={() => {  }}
                onRequestClose={() => {  }}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-close-icon" onClick={() => { setModalIsOpen(false) }}>
                    <FontAwesomeIcon icon={faClose} color="#3B4F5C" />
                </div>
                <div className="header-modal-category">
                    {/* <div className={ cateActive === "Deposit" ?  "item active" : "item"} onClick={ () => { setCateActive("Deposit") }}>Deposit</div>
                    <div className={ cateActive === "Withdraw" ?  "item active" : "item"} onClick={ () => { setCateActive("Withdraw") }}>Withdraw</div>
                    <div className={ cateActive === "Cupons" ?  "item active" : "item"} onClick={ () => { setCateActive("Cupons") }}>Cupons</div>
                    <div className={ cateActive === "Referals" ?  "item active" : "item"} onClick={ () => { setCateActive("Referals") }}>Referals</div> */}
                    <div className={ cateActive === "Deposit" ?  "item active" : "item"} onClick={ () => { setCateActive("Deposit") }}>Connect</div>
                    { account === null ? null :
                        <div className={ cateActive === "Profile" ?  "item active" : "item"} onClick={ () => { setCateActive("Profile") }}>{ dotString(account) }</div>
                    }
                </div>
                {/* { cateActive === "Deposit" ? <Deposit /> : null } */}
                {/* { cateActive === "Withdraw" ? <Withdraw /> : null } */}
                {/* { cateActive === "Cupons" ? <Cupon/> : null } */}
                {/* { cateActive === "Referals" ? <Referal/> : null } */}
                { cateActive === "Deposit" ? <WalletConnect /> : null }
                { cateActive === "Profile" ? <Profile /> : null }
            </Modal>

            <div className="logo-container">
                <div className={navExpand ? "nav-expand-openned" : "nav-openned"}>
                    <img src={ navExpand ? NavClosed : NavOpenned } alt="nav-open" onClick={() => { updateNavExpand((old) => { return !old }) }} />
                </div>
                <img src = { Logo } className = {"logo"} alt="" 
                    style={navExpand ? { paddingLeft: 220 } : { paddingLeft: 120 }}
                    onClick={()=>{ window.location.href = "/" }}/>
            </div>
            <div className="rank-container">
                <div className="rank-text">
                    <div className="row">
                        <div>RAKEBACK:</div>
                         <div style={{color: "#09BB66"}}>15%</div>
                    </div>
                    <div className="row">
                        <div>ROLLBACK:</div>
                        <div style={{color: "#00F2FF"}}>0%</div>
                    </div>
                </div>
                <div className="rank-price">
                    $0.00
                </div>
            </div>
            <div className="function-container">
                <div className="icon">
                    <FontAwesomeIcon icon={faSearch} color="#fff" />
                </div>
                <div className="icon" onClick={() => { setModalIsOpen(true) }}>
                    <FontAwesomeIcon icon={faUserAlt} color={ account === null ? '#fff' :'green' } />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faCommentAlt} color="#fff" />
                </div>
            </div>
        </div>
    )
}

export default Header;