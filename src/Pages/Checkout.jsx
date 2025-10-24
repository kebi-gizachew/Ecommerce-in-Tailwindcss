import Boxing from '../components/Boxing'
import Heading from '../components/Heading' 
import socks from '/assets/athletic-cotton-socks-6-pairs.jpg'
import ball from '/assets/intermediate-composite-basketball.jpg'
import Summary from '../components/Summary'
function Check(){
    const checking=[
        {
            id:1,
            date:"Tuesday,June 21",
            desc:"Black and Gray Athletic Cotton Socks - 6 Pairs",
            money:"$10.90",
            quantity:2,
            image:socks
        },
        {
            id:2,
            date:"Wednesday, June 15",
            desc:"Intermediate Size Basketball",
            money:"$20.95",
            quantity:1,
            image:ball
        }
    ]
    return(
        <div>
            <Heading quant="3"/>
            <h1 className="text-5xl font-bold w-[42%] mt-[140px] flex justify-center items-center mb-[50px]">Review your order</h1>
            <div className="flex justify-start items-start">
                <div>
            {checking.map((item)=>{
                return(
                <Boxing key={item.id} date={item.date} desc={item.desc} currency={item.money} quantity={item.quantity} image={item.image}/>
           )})}
           </div>
           <Summary quant="3" items="$42.75" sh="$4.99" tt="$47.74" et="$4.77" ot="$52.51" />
        </div>
    </div>)
}
export default Check;