import logo from '/assets/logo.png'
import checkout from '/assets/checkout-lock-icon.png'

function Heading(props){
    return(
        <header className="flex justify-evenly gap-[300px] items-center w-full h-[8vh] bg-white 
                           md:flex-col md:gap-[20px] md:h-auto md:py-[10px]">
            <img className="w-[11%] h-[50px] md:w-[30%] md:h-auto" src={logo}/>
            <h1 className="text-5xl font-bold md:text-2xl md:text-center">
                Checkout ({props.quant} items)
            </h1>
            <img className="w-[70px] h-[70px] md:w-[50px] md:h-[50px]" src={checkout}/>
        </header>
    )
}

export default Heading;
