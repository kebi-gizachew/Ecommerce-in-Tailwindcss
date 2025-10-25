function Box(props) {
  return (
    <div className="border-[2px] border-[rgba(239,239,239,1)] bg-white w-[16vw] h-[65vh] flex flex-col items-center p-[30px] pt-[30px] 
                    md:w-[90vw] md:h-auto md:p-[15px] md:pt-[15px]">
      <img src={props.image} className="rounded-[5%] w-[80%] h-[50%] mb-[20px] object-contain 
                                        md:w-[90%] md:h-auto md:mb-[10px]" />
      <div className="items-start flex flex-col w-full">
        <p className="text-[33px] text-left w-full mb-[50px] mt-[0px] 
                     md:text-[20px] md:mb-[20px]">{props.text}</p>
        
        <div className="mt-[0px] flex pl-0 gap-[20px] items-center 
                        md:flex-col md:gap-[10px] md:items-start">
          <img src={props.rating} alt="Rating" className="w-[200px] h-[40px] md:w-[120px] md:h-[25px]"/>
          <p className="text-[rgba(0,86,16,1)] text-[30px] md:text-[18px]">{props.aside}</p>
        </div>
        
        <p className="my-[20px] text-[30px] font-bold md:text-[20px]">{props.cost}</p>
        
        <select className="w-[25%] h-[60px] border-[2px] border-black rounded-[5px] text-3xl p-[10px] mb-[50px] 
                           md:w-[50%] md:h-[40px] md:text-base md:mb-[20px]">
          <option value="default">1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <button className="w-[90%] h-[80px] flex justify-center items-center text-white text-3xl rounded-[5px] bg-[rgba(0,86,16,1)] 
                         md:h-[50px] md:text-lg">
        Add to Cart
      </button>
    </div>
  );
}

export default Box;

