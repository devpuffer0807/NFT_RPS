import React, { useState, useEffect } from "react"
import { useGlobalState } from "state-pool"
import { FaList } from "react-icons/fa"

import SmartDataTable from "react-smart-data-table";

import "../assets/css/Game.css"
import "react-smart-data-table/dist/react-smart-data-table.css"

import Footer from "../Components/Footer"

import { walletConnect } from "../Util/wallet_connect";
import { BINANCE } from "../Config/chainlist";

import { roomCounter, callRoomList } from "../Contract/Sps/read";

const Game = () => {
    const [navExpand] = useGlobalState('navExpand')
    const [, , updateLoading] = useGlobalState('loading');

    const [width, setWidth] = useState(0)
    const [search, setSearch] = useState("")
    const [pageIndex, setPageIndex] = useState(0)
    const [roomList, setRoomList] = useState([]);

    let walletInfo = null;
  
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()

        const init = async () => {
            updateLoading(() => {return true});
            walletInfo = await walletConnect(BINANCE);
            if(walletInfo?.spsContract !== undefined && walletInfo?.spsContract !== null){
                const _roomCounter = await roomCounter(walletInfo);
                let _roomList = [...roomList];
                for(var i = 0; i < _roomCounter; i++){
                    const _roomInfo = await callRoomList(walletInfo, i)
                    _roomList.push({ ..._roomInfo });
                }
                setRoomList(_roomList);
            }
            updateLoading(() => {return false});
        }

        init()
        
        return () => { 
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    const emptyTable = <div className="game-table-empty-table">There is no data available at the time.</div>

    return(
        <div className="container" style={{ marginLeft: width > 835 ? (navExpand ? 200 : 100) : 0  }}>
            <h1 className="game-title"><FaList/>&nbsp;Game List</h1>
            <div className="game-table-title">
                <input className="header-input-background" placeholder={"Search"} onChange={(e) => { setSearch(e.target.value); }}/>
            </div>
            <div className="game-table-container">
                <SmartDataTable
                    data={pageIndex === "all" ? roomList : roomList.slice(pageIndex*10, (pageIndex + 1)*10)}
                    // data={testData}
                    name="test-table"
                    className="game-table"
                    filterValue= { search }
                    perPage={pageIndex === 'all' ? roomList.length : 10}
                    paginator={() => {
                        var max = Math.round(roomList.length/10);
                        var a = []
                        return(
                            <div className="game-table-paginator-container">
                                <div className={ "all" === pageIndex ? "game-talbe-paginator-item-active" : "game-talbe-paginator-item" } onClick={() => { setPageIndex("all") }}>All</div>
                                {
                                    Array(max).fill(0).map((item, index) => {
                                        return(
                                            <div className={ index === pageIndex ? "game-talbe-paginator-item-active" : "game-talbe-paginator-item" } onClick={() => { setPageIndex(index) }} key={index}>{ index + 1 }</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }}
                    emptyTable={emptyTable}
                    parseBool
                    dynamic
                    // sortable
                    withToggles
                    withLinks
                    withHeader
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Game;