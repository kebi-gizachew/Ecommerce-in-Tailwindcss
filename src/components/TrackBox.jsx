function TrackBox(props){
    return(
        <div className="flex flex-col w-[56%] justify-start items-start m-auto 
                        md:w-[90%] md:items-center md:text-center">
            <h1 className="text-5xl font-bold mb-[30px] md:text-2xl md:mb-[15px]">
                Arriving on {props.date}
            </h1>
            <p className="text-4xl mb-[10px] md:text-lg">{props.name}</p>
            <p className="text-4xl md:text-lg">Quantity: {props.quantity}</p>
            <img className="w-[300px] h-[300px] my-[60px] md:w-[200px] md:h-[200px] md:my-[30px]" src={props.image}/>
        </div>
    )
}

export default TrackBox;
