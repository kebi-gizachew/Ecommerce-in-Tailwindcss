import Header from '../components/Header'
import Place from '../components/OrderPlace'
import Addto from '../components/AddTo'
import socks from '/assets/athletic-cotton-socks-6-pairs.jpg'
import dult from '/assets/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import React from 'react'

function Orders() {
  const sets = [
    {
      id: 1,
      date: "August 12",
      currency: "$35.06",
      code: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
      collection:"August"
    },
    {
      id: 2,
      date: "June 10",
      currency: "$41.90",
      code: "b6b6c212-d30e-4d4a-805d-90b52ce6b37d",
      collection:"June"
    }
  ]

  const add = [
    {
      id: 1,
      desc: "Black and Gray Athletic Cotton Socks - 6 pairs",
      date: "August 15",
      quan: 1,
      img: socks,
      collection: "August"
    },
    {
      id: 2,
      desc: "Adults Plain Cotton T-Shirt - 2 Pack",
      date: "August 19",
      quan: 3,
      img: dult,
      collection: "August"
    },
  ]

  return (
    <>
      <Header />
      <p className="text-5xl flex justify-center pt-[60px] font-bold w-[52vw]">
        Your Orders
      </p>

      <div className="flex flex-col w-[57vw] m-[40px] mx-auto mt-[40px] pr-[2px]">
        {sets.map((item) => (
          <React.Fragment key={item.id}>
            <Place
              currency={item.currency}
              code={item.code}
              date={item.date}
            />
            
            {add
              .filter(addItem => addItem.collection === item.collection)
              .map(addItem => (
                <Addto
                  key={addItem.id}
                  desc={addItem.desc}
                  img={addItem.img}
                  quan={addItem.quan}
                  date={addItem.date}
                />
              ))}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Orders
