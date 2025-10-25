function Bottom(){
    return(
        <div>
            <div className="m-auto w-[55%] flex justify-between items-center text-[45px] font-bold mt-[30px] 
                            md:w-[90%] md:text-2xl md:mt-[15px]">
                <h1>Preparing</h1>
                <h1 className="text-[rgb(25,135,84)]">Shipped</h1>
                <h1>Delivered</h1>
            </div>
            <div className="m-auto w-[55%] h-[52px] border-[1px] rounded-[50px] mt-[40px] flex justify-start items-center
                            md:w-[90%] md:h-[30px] md:mt-[20px]">
                <div className="w-[50%] h-[52px] bg-[rgb(25,135,84)] rounded-[50px] md:h-[30px]"></div>
            </div>
        </div>
    )
}

export default Bottom;
