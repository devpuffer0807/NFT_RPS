import React, { useEffect } from "react"
import Header from "./Components/Header"
import Sidbar from "./Components/Sidbar"
import SidbarExpand from "./Components/Sidbar/sidebar-expand";
import { store, useGlobalState } from "state-pool"
import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./Pages/Home"
import NFTPage from "./Pages/NFT"
import Lotteryage from "./Pages/Lottery"
import NFTDetail from "./Pages/NFTDetail";
import GamePage from "./Pages/Game";
import GameRoomPage from "./Pages/GameRoom";
import GameCreatePage from "./Pages/GameCreate";

import Loading from "./Components/Loading";

import "./assets/css/App.css";

import StoreData from "./store"
import { getOpenseaCollection } from "./Api/opensea"

import { ToastContainer, } from 'react-toast'

Object.keys(StoreData).map((key) => {
  store.setState(key, StoreData[key])
  return true
})

function App() {
  const [navExpand] = useGlobalState('navExpand')
  const [, , updateSideBarActive] = useGlobalState('sideBarActive')
  const [, , updateOpenseaCollections] = useGlobalState('openseaCollections')
  const [loading] = useGlobalState('loading')
  const location = useLocation();
  useEffect(() => {
    updateSideBarActive((old) => { return location.pathname })
  }, [updateSideBarActive, location])

  useEffect(() => {
    const init = async () => {
      const res = await getOpenseaCollection()
      updateOpenseaCollections(() => {
          return res
      })
    }
    init()
  }, [])

  return (
    <div className="App" style={loading ? {overflow: 'hidden', height: '95vh'} : {}}>
      <Header />
      { loading ? <Loading /> : null }
      { navExpand ? <SidbarExpand/> : <Sidbar /> }
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<GamePage />}/>
        <Route path="/game_room" element={<GameRoomPage />}/>
        <Route path="/game_create" element={<GameCreatePage />}/>
        <Route path="/nft" element={ <NFTPage/>}/>
        <Route path="/nft_detail" element={ <NFTDetail />}/>
        <Route path="/lottery" element={<Lotteryage/>}/>
      </Routes>
    </div>
  );
}

export default App;
