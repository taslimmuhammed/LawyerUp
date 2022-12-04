import NFTproduct from "../Components/NFTproduct";
import '../Styles/marketplace.css';
// import { useState, useEffect,useContext } from "react";
// import {Link, useNavigate} from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';

const MarketPlace = () => {
    // const navigate = useNavigate()
    // const {id,setId} = useContext(AuthContext);
    // const handleId = (id) =>{
    //     setId(id);
    //     navigate('productdata');
    //   }
    let arr=[{name:"CYCLE",inventor:"zaeem",licensee:"amaal",timestamp:"9:30 10/12/2022",id:"123456676779"},{name:"CAMERA",inventor:"zaeem",licensee:"amaal",timestamp:"9:30 10/12/2022",id:"12345656565656"},{name:"TRUCK",inventor:"zaeem",licensee:"amaal",timestamp:"9:30 10/12/2022",id:"1234567222"},{name:"JCB",inventor:"zaeem",licensee:"amaal",timestamp:"9:30 10/12/2022",id:"123456"}]
    
    return (
        <div className='gradient-bg-welcome flex w-full min-h-screen justify-center items-center'>
            <div className="marketplace_container">
            <h2>Market Place</h2>
            <div className="flex flex-wrap justify-center items-center mt-10">
                {arr.map((data)=>(<div><NFTproduct name={data.name} licensee={data.licensee} inventor={data.inventor} timestamp={data.timestamp} /></div>))}
            </div>
            </div>
        </div>

    );
}
 
export default MarketPlace;