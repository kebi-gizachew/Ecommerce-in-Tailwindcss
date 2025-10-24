import logo from '/assets/logo.png'
import checkout from '/assets/checkout-lock-icon.png'
function Heading(props){
    return(
        <header className="flex justify-evenly gap-[300px] items-center w-full h-[8vh] bg-white">
            <img className="w-[11%] h-[50px] " src={logo}/>
            <h1 className="text-5xl font-bold">Checkout ({props.quant} items)</h1>
            <img className="w-[70px] h-[70px]" src={checkout}/>
        </header>
    )

}
export default Heading