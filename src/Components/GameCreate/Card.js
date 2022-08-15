import React from "react";
import { toast } from "react-toast"

import RPSImg from "../../assets/image/game_create/rps.png";
import { walletConnect } from "../../Util/wallet_connect";
import { BINANCE } from "../../Config/chainlist";
import { createRoom } from "../../Contract/Sps/write";
import { BINANCE_SPS_ADDRESS } from "../../Config/provider_url";

import StoneImg from "../../assets/image/game_room/stone.png";
import PaperImg from "../../assets/image/game_room/paper.png";
import ScissorsImg from "../../assets/image/game_room/scissors.png";

const Card = ({ player_num }) => {
    const [active, setActive] = React.useState(null);
    const selectSPS = (choice) => {
        setActive(choice);
    };

    const _createRoom = async () => {
        if (active === null) {
            return toast.warn("Please select your choice.");
        }
        let walletInfo = await walletConnect(BINANCE);
        await createRoom(walletInfo, player_num, active, BINANCE_SPS_ADDRESS, 0);
    };

    return (
        <div style={{ width: 250, height: 250, borderColor: '#919090', borderStyle: 'solid', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={RPSImg} alt="" style={{ width: 100, }} />
                <h2 style={{ color: '#2ae11e' }}>{player_num} Players</h2>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <img src={StoneImg} style={{ width: 30, height: 30, cursor: 'pointer', borderColor: '#ababab', borderStyle: active === 1 ? 'solid' : 'none', borderWidth: 1, }} onClick={() => { selectSPS(1); }} />
                <img src={PaperImg} style={{ width: 30, height: 30, cursor: 'pointer', borderColor: '#ababab', borderStyle: active === 2 ? 'solid' : 'none', borderWidth: 1, }} onClick={() => { selectSPS(2); }} />
                <img src={ScissorsImg} style={{ width: 30, height: 30, cursor: 'pointer', borderColor: '#ababab', borderStyle: active === 3 ? 'solid' : 'none', borderWidth: 1, }} onClick={() => { selectSPS(3); }} />
            </div>
            <div style={{ width: '100%', marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 100, height: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backgroundColor: 'red', borderRadius: 3 }}
                    onClick={_createRoom}
                >
                    Create
                </div>
            </div>
        </div>
    );
};

export default Card;