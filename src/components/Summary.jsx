function Summary(props){
    return(
    <div className="flex flex-col py-[30px] px-[30px] border-[1px] w-[700px] h-auto mt-[30px] gap-[20px] ">
        <h1 className="w-full flex justify-start items-center text-5xl font-bold">Payment Summary</h1>
        <div className="w-full flex justify-between items-center text-3xl">
            <p>Items ({props.quant}):</p>
            <p>{props.items}</p>
        </div>
        <div className="w-full flex justify-between items-center text-3xl">
            <p>Shipping & handling:</p>
            <p>{props.sh}</p>
        </div>
        <div>
            <div></div>
        </div>
        <div className="flex justify-between items-center w-full text-3xl">
            <p>Total before tax:</p>
            <p>{props.tt}</p>
        </div>

            <div className="flex justify-between items-center w-full text-3xl">
            <p>Estimated tax (10%):</p>
            <p>{props.et}</p>
        </div>
        <hr className="w-[100%] flex justify-center items-center"/>
        <div className="flex justify-between items-center w-full text-2xl">
            <h1 className="text-4xl text-green-700 ">Order total:</h1>
            <h1 className="text-4xl text-green-700 ">{props.ot}</h1>
        </div>
        <div className="flex justify-center items-center">
        <button className="w-[80%] h-[80px] bg-green-700 text-[rgba(255,255,255,1)] flex justify-center items-center text-3xl">Place your order</button>
        </div>
    </div>
    )

}
export default Summary