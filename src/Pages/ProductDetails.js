import NFTproduct from "../Components/NFTproduct";
import '../Styles/productDetails.css';
import PatentCardfull from "../Components/PatentCardFull";
import { Chat } from "@pushprotocol/uiweb";
// import { useState, useEffect,useContext } from "react";
// import {Link, useNavigate} from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
import Form from "../Components/Form";
const MarketPlace = () => {
    // const navigate = useNavigate()
    // const {id,setId} = useContext(AuthContext);
    // const handleId = (id) =>{
    //     setId(id);
    //     navigate('productdata');
    //   }
    let data=[{name:"CYCLE",inventor:"zaeem",licensee:"amaal",timestamp:"9:30 10/12/2022",id:"123456676779",price:"$699",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}]
    
    return (
        <div className='gradient-bg-welcome flex w-full min-h-screen justify-center items-center'>
            <div className="productDetails_container">
            <div className="fullDetails">
                <PatentCardfull name={data[0].name} licensee={data[0].licensee} inventor={data[0].inventor} timestamp={data[0].timestamp} price={data[0].price} description={data[0].description}></PatentCardfull>
                <div className="form_container">
                <Form/>

                </div>
            
            </div>
            </div>
            <Chat
            account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address
            supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address
            apiKey="kD0sm54zn7.IfNlbRZoKJslR6Y7lUejvqKfOvze4LrVUpI9vk2LJjZQFwBDeWThU0c6dO53ZzSu"
                env="staging"
            />
        </div>

    );
}
 
export default MarketPlace;