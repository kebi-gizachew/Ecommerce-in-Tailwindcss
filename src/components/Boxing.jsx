function Boxing(props){
    return(
        <div className="m-[30px] border-[1px] border-black w-[53%] h-[38vh] flex flex-col py-[50px] px-[30px] ml-[430px] rounded-[5px] pr-[50px] 
                        md:w-[90%] md:ml-[auto] md:mr-[auto] md:h-auto md:py-[30px] md:px-[15px] md:pr-[15px]">
            <h1 className="text-green-700 text-4xl font-bold w-full flex justify-start items-center mb-[40px] 
                           md:text-2xl md:mb-[20px]">Delivery date: {props.date}</h1>
            <div className="flex justify-between items-center flex-wrap w-full p-[0px] md:flex-col md:gap-[20px]">
                <div className="w-[230px] h-full flex justify-center items-start p-[0px] md:w-[80%] md:mx-auto md:h-auto">
                    <img className="h-50% m-[0px] md:h-auto md:w-full" src={props.image}/>
                </div>
                <div className="flex flex-col text-left text-3xl justify-start items-start h-full gap-[10px] w-[45%] mb-[30px] ml-[10px] 
                                md:w-[90%] md:ml-[0px] md:text-xl">
                    <p className="text-4xl font-bold mb-[20px] mr-[40px] md:text-2xl md:mb-[10px] md:mr-[0px]">{props.desc}</p>
                    <p className="text-4xl font-bold md:text-2xl">{props.currency}</p>
                    <div className="flex gap-[20px] md:flex-col md:gap-[10px] md:text-lg">
                        <p className="text-[35px] md:text-base">Quantity: {props.quantity}</p>
                        <p className="text-green-700 text-[35px] md:text-base">Update</p>
                        <p className="text-green-700 text-[35px] md:text-base">Delete</p>
                    </div>
                </div>
                <div className="w-[36%] h-full md:w-[90%] md:mx-auto md:text-base">
                    <p className="text-4xl font-bold mb-[10px] md:text-xl">Choose a delivery option:</p>
                    <label className="flex w-[300px] h-auto justify-center items-center gap-[15px] text-[32px] md:w-full md:gap-[10px] md:text-base">
                        <input className="w-[30px] h-[30px] md:w-[20px] md:h-[20px]" type="radio"/>
                        <div className="flex flex-col">
                            <p>Tuesday, June 21</p>
                            <p className="text-[rgba(184,184,184,1)] md:text-sm">FREE Shipping</p>
                        </div>
                    </label>
                    <label className="flex w-[350px] h-auto justify-center items-center gap-[15px] text-[32px] md:w-full md:gap-[10px] md:text-base">
                        <input className="w-[30px] h-[30px] md:w-[20px] md:h-[20px]" type="radio"/>
                        <div className="flex flex-col">
                            <p>Wednesday, June 15</p>
                            <p className="text-[rgba(184,184,184,1)] md:text-sm">$4.99 - Shipping</p>
                        </div>
                    </label>
                    <label className="flex w-[300px] h-auto justify-center items-center gap-[15px] text-[32px] md:w-full md:gap-[10px] md:text-base">
                        <input className="w-[30px] h-[30px] md:w-[20px] md:h-[20px]" type="radio"/>
                        <div className="flex flex-col">
                            <p>Monday, June 13</p>
                            <p className="text-[rgba(184,184,184,1)] md:text-sm">$9.99 - Shipping</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Boxing;
