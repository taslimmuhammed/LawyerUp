import React from 'react'
import Welcome from '../Components/Welcome'
import Services from '../Components/Services'
import Patents from '../Components/Patents'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Chat } from "@pushprotocol/uiweb";

function Home() {
  return (
    <div>
    <div className="gradient-bg-welcome">
     <Navbar></Navbar>
     <Welcome></Welcome>
     </div>
     <Services/>
     <Patents></Patents>
     <Footer/> 
    <Chat
      account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
      supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
      apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
        env="staging"
    />
    </div>
  )
}

export default Home