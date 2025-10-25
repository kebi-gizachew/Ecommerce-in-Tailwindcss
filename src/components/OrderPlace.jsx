function Place(props){
    return(
        <div className="w-full flex justify-between items-center border-[rgba(210,210,210,1)] border-[1px] rounded-[5px] h-[13vh] bg-transparent text-black 
                        md:flex-col md:h-auto md:gap-[15px] md:p-[10px]">
            <div className="w-[50%] flex justify-start gap-[100px] h-full p-[30px] items-center 
                            md:w-full md:flex-col md:gap-[10px] md:p-[10px]">
                <div className="w-[250px] flex flex-col text-left ml-[60px] md:w-full md:ml-[0px]">
                    <h3 className="font-bold text-4xl text-black md:text-xl">Order Placed:</h3>
                    <h3 className="text-4xl mt-[5px] md:text-lg">{props.date}</h3>
                </div>
                <div className="md:w-full">
                    <h3 className="font-bold text-4xl text-black md:text-xl">Total:</h3>
                    <h3 className="text-4xl mt-[5px] md:text-lg">{props.currency}</h3>
                </div>
            </div>
            <div className="w-[42%] h-full text-left flex flex-col justify-center items-start 
                            md:w-full md:flex-row md:justify-between md:items-center md:text-sm">
                <h3 className="font-bold text-4xl text-black text-left md:text-base">Order ID:</h3>
                <h3 className="text-4xl text-black text-left md:text-base">{props.code}</h3>
            </div>
        </div>
    )
}

export default Place;
