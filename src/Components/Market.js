import NFTproduct from "./NFTproduct";
import '../Styles/Market.css'
const Market = () => {
    return (
        <div className='market_body'>
            <NFTproduct  name="Ball Bearing" inventor='Samurai' timestamp="9:00 22/12/2001" imgurl="https://flowbite.com/docs/images/blog/image-4.jpg" licensee="Tazleem"/>
        </div>
     );
}
 
export default Market;