import Header from '../components/Header';
import TrackBox from '../components/TrackBox'
import products from '../data/products'
import {NavLink} from 'react-router-dom'
import Bottom from '../components/TrackingBottom'

function Tracking(){
    return(
        <>
            <Header/>
            <div className="w-[50%] flex justify-evenly mt-[50px] 
                            md:w-[90%] md:flex-col md:items-center md:mt-[20px]">
                <NavLink 
                    to='/order' 
                    className="text-[rgb(25,135,84)] text-3xl underline w-[20%] flex justify-center items-center mb-[50px] 
                               md:w-full md:text-xl md:mb-[20px] md:text-center">
                    View all orders
                </NavLink>
            </div>
            <TrackBox 
                name={products[0].name} 
                date="Monday, June 13" 
                quantity={1} 
                image={products[0].image}
            />
            <Bottom/>
        </>
    )
}

export default Tracking;

