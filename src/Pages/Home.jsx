import Header from '../components/Header'
import Box from '../components/Box'
import socks from '/assets/athletic-cotton-socks-6-pairs.jpg'
import ball from '/assets/intermediate-composite-basketball.jpg'
import shirt from '/assets/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import fourhalf from '/assets/rating-45.png'
import four from '/assets/rating-40.png'
function Home(){
    const sets=[
        {
            id:1,
            img:socks,
            para:"Black and Gray Athletic Cotton Socks - 6 pairs",
            rating:fourhalf,
            money:"$10.90",
            aside:"87"
        },
        {
            id:2,
            img:ball,
            para:"Intermediate Size Basketball",
            rating:four,
            money:"$20.95",
            aside:"127"
        },
        {
            id:3,
            img:shirt,
            para:"Adults Plain Cotton T-Shirt - 2 pack",
            rating:fourhalf,
            money:"$7.99",
            aside:"56"
        }
    ]
    return(
        <div className="font-robot">
    <Header/>
    <div className="flex flex-wrap gap-[0px]">
    {sets.map((item)=>{
        return(
        <Box image={item.img} rating={item.rating} aside={item.aside} text={item.para} cost={item.money}/>
        )
    })}
    </div>
    </div>
    )
}
export default Home;