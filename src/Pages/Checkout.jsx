import Boxing from '../components/Boxing'
import Heading from '../components/Heading' 
import socks from '/assets/athletic-cotton-socks-6-pairs.jpg'
import ball from '/assets/intermediate-composite-basketball.jpg'
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
            {checking.map((item)=>{
                return(
                <Boxing key={item.id} date={item.date} desc={item.desc} currency={item.money} quantity={item.quantity} image={item.image}/>
           )})}
        </div>
    )
}
export default Check;