import logowhite from '/assets/logo-white.png';
import buyagain from '/assets/buy-again.png';
import searchicon from '/assets/search-icon.png';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <header className="w-screen overflow-x-hidden h-[8vh] bg-[rgb(8,79,45)] text-white flex justify-between items-center 
                       md:flex-col md:h-auto md:py-[10px]">
      <NavLink to="/">
        <img src={logowhite} alt="A white logo" className="ml-[50px] w-[340px] h-[43%] md:ml-[10px] md:w-[200px] md:h-auto" />
      </NavLink>
      
      <div className="bg-white flex justify-between w-[55%] h-[65%] items-center rounded-[5px] 
                      md:w-[90%] md:h-[50px] md:mt-[10px]">
        <p className="text-[rgba(112,112,112,1)] text-4xl m-[35px] md:text-base md:m-[10px]">Search</p>
        <div className="w-[5%] h-full flex justify-center items-center text-[rgb(0, 0, 0)] bg-[rgb(186,255,190)] rounded-[0_5px_5px_0] 
                        md:w-[10%]">
          <img src={searchicon} alt="Search Icon" className="w-[50%] md:w-[60%]" />
        </div>
      </div>
      
      <div className="w-[13%] flex justify-end items-center bg-transparent gap-[40px] mr-[40px] 
                      md:w-[90%] md:justify-between md:mr-[10px] md:mt-[10px]">
        <NavLink to="/order" className="text-3xl font-bold md:text-base">Orders</NavLink>
        <div className="w-[40%] h-full flex justify-center items-center gap-[10px] md:w-[50%]">
          <NavLink className="flex justify-center items-center gap-[10px]" to='/checkout'>
            <img src={buyagain} alt="Buy Again Icon" className="w-[50%] md:w-[30%]" />
            <p className="text-3xl font-bold md:text-base">Cart</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;




